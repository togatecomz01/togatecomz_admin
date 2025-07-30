import type { ReactNode } from 'react';
import styles from './Popup.module.scss';
import CloseIcon from '@/assets/images/Xbutton.svg';

interface PopupProps {
  title: string;
  children: ReactNode;
  onClose: () => void;
}

const Popup = ({ title, children, onClose }: PopupProps) => {
  return (
    <div className={styles.overlay}>
      <div className={styles.popup}>
        <div className={styles.popupHeader}>
          <h3 className={styles.popupTitle}>{title}</h3>
          <button type="button" onClick={onClose} className={styles.closeButton}>
            <img src={CloseIcon} alt="닫기" />
          </button>
        </div>
        <div>{children}</div>
      </div>
    </div>
  );
};

export default Popup;
