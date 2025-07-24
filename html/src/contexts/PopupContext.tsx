import { createContext, useContext, useState } from 'react';
import type { ReactNode } from 'react';

import Popup from '../components/layout/Popup/Popup';

interface PopupOptions {
  title: string;
  content: ReactNode;
}

interface PopupContextType {
  openPopup: (options: PopupOptions) => void;
  closePopup: () => void;
}

const PopupContext = createContext<PopupContextType | undefined>(undefined);

export const PopupProvider = ({ children }: { children: ReactNode }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [popupOptions, setPopupOptions] = useState<PopupOptions | null>(null);

  const openPopup = (options: PopupOptions) => {
    setPopupOptions(options);
    setIsOpen(true);
  };

  const closePopup = () => {
    setIsOpen(false);
    setPopupOptions(null);
  };

  const value = { openPopup, closePopup };

  return (
    <PopupContext.Provider value={value}>
      {children}
      {isOpen && popupOptions && (
        <Popup title={popupOptions.title} onClose={closePopup}>
          {popupOptions.content}
        </Popup>
      )}
    </PopupContext.Provider>
  );
};

export const usePopup = () => {
  const context = useContext(PopupContext);
  if (!context) {
    throw new Error('usePopup must be used within a PopupProvider');
  }
  return context;
};
