import styles from './SubHeader.module.scss';

type WrapperProps = {
  subTitle?: string;
  children?: React.ReactNode;
};

const SubHeader = ({ subTitle, children }: WrapperProps) => {
  return (
    <div className={styles.wrapper}>
      <h2>{subTitle}</h2>
      <div className={styles.rightActions}>{children}</div>
    </div>
  );
};

export default SubHeader;
