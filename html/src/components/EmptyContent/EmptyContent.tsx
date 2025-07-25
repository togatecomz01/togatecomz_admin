import styles from './EmptyContent.module.scss';

type EmptyContentProps = {
  message: string;
};

const EmptyContent = ({ message }: EmptyContentProps) => {
  return (
    <div className={styles.emptyContentContainer}>
      <i className={styles.cautionIcon}></i>
      <p>{message}</p>
    </div>
  );
};

export default EmptyContent;
