import styles from './FormWrap.module.scss';

interface Props {
  label: string;
  subText?: string;
  children: React.ReactNode;
  className?: string;
}

const FormWrap = ({ label, subText, children, className }: Props) => {
  return (
    <form className={`${styles.formWrap} ${className || ''}`}>
      <label className={styles.formLabel}>
        <h3>{label}</h3>
        {subText && <span className={styles.formSubtext}>{subText}</span>}
      </label>
      <div className={styles.formChildren}>{children}</div>
    </form>
  );
};

export default FormWrap;
