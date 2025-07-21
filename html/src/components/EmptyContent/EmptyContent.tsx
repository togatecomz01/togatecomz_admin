import styles from './EmptyContent.module.scss';

type EmptyContentProps = {
  imageSrc: string;
  message: string;
};

const EmptyContent = ({ imageSrc, message }: EmptyContentProps) => {
  return (
    <div className={styles.emptyContentContainer}>
      <img src={imageSrc} alt="내용 없음" />
      <p>{message}</p>
    </div>
  );
};

export default EmptyContent;
