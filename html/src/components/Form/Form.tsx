import styles from './Form.module.scss';

interface Props {
  label: string;
  subText?: string;
  children: React.ReactNode;
  className?: string;
}

const Form = ({ label, subText, children, className }: Props) => {
  return (
    <div className={`${styles.formWrap} ${className || ''}`}>
      <label className={styles.formLabel}>
        <h3>{label}</h3>
        {subText && <span className={styles.formSubtext}>{subText}</span>}
      </label>
      <div className={styles.formChildren}>{children}</div>
    </div>
  );
};

export default Form;
