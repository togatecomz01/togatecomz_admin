import styles from './SubHeader.module.scss';

type SubHeaderProps = {
  subTitle?: string;
  children?: React.ReactNode;
};

const SubHeader = ({ subTitle, children }: SubHeaderProps) => {
  return (
    <div className={styles.subHeader}>
      <h2>{subTitle}</h2>
      <div className={styles.rightActions}>{children}</div>
    </div>
  );
};

export default SubHeader;
