import styles from './FormTable.module.scss';

const FormTable = ({ children }: { children: React.ReactNode }) => {
  return <div className={styles.FormTable}>{children}</div>;
};

export default FormTable;
