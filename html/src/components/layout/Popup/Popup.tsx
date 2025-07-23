import { usePopup } from '../../../contexts/PopupContext';
import styles from './Popup.module.scss';
import Button from '../../Button/Button';

const Popup = () => {
  const { isOpen, text, closePopup } = usePopup();

  if (!isOpen) return null;

  return (
    <div className={styles.overlay}>
      <div className={styles.popup}>
        <p dangerouslySetInnerHTML={{ __html: text.message || '' }}></p>
        <Button name={text.button || '확인'} onClick={closePopup} />
      </div>
    </div>
  );
};

export default Popup;