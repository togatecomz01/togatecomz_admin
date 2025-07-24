import styles from './InputBtnContainer.module.scss';

const InputBtnContainer = ({ children }: { children: React.ReactNode }) => {
  return <div className={styles.InputBtnContainer}>{children}</div>;
};

export default InputBtnContainer;
