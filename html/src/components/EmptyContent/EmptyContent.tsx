import styles from './EmptyContent.module.scss';

type EmptyContentProps = {
  imageSrc: string;
  message: string;
  actionButton?: React.ReactNode;
};

const EmptyContent = ({ imageSrc, message, actionButton }: EmptyContentProps) => {
  return (
    <div className={styles.emptyContentContainer}>
      <img src={imageSrc} alt="내용 없음" />
      <p>{message}</p>
      {actionButton && <div className={styles.actionButtonContainer}>{actionButton}</div>}
    </div>
  );
};

export default EmptyContent;
