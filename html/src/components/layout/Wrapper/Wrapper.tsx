import styles from './Wrapper.module.scss';

type WrapperProps = {
  subTitle?: string;
  children: React.ReactNode;
  rightContent?: React.ReactNode;
};

const Wrapper = ({ subTitle, children, rightContent }: WrapperProps) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.header}>
        <h2>{subTitle}</h2>
        {rightContent && <div>{rightContent}</div>}
      </div>
      {children}
    </div>
  );
};

export default Wrapper;
