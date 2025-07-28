import styles from './FormWrap.module.scss';

interface Props {
  label: string;
  subText?: string;
  children: React.ReactNode;
  className?: string;
  isAsterisk?: boolean;
  subTextClassName?: string;
}

const FormWrap = ({ label, subText, children, className, isAsterisk, subTextClassName }: Props) => {
  return (
    <form className={`${styles.formWrap} ${className || ''}`}>
      <label className={styles.formLabel}>
        <h3>
          {label} {isAsterisk && <span className={styles.asterisk}>*</span>}
        </h3>
        {subText && <span className={`${styles.formSubtext} ${subTextClassName && styles[subTextClassName]}`}>{subText}</span>}
      </label>
      <div className={styles.formChildren}>{children}</div>
    </form>
  );
};

export default FormWrap;
