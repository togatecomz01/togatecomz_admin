import styles from './Popup.module.scss';
// import { usePopup } from "../../../contexts/PopupContext";

const Popup = () => {
  // const { isOpen, text, closePopup } = usePopup();
  // if (!isOpen) return null;

  // const onBackgroundClick = () => closePopup();
  // const onPopupClick = (e: React.MouseEvent) => e.stopPropagation();

  return (
    <div className={styles.popupWrapper}>
      <div className={styles.popup}>
        <div className={styles.text}></div>
        <button className={styles.button}></button>
      </div>
    </div>
  );
};

export default Popup;
