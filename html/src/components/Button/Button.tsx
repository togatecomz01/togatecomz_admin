import styles from './Button.module.scss';

type ButtonProps = {
  name: string;
  onClick?: () => void;
  fullWidth?: boolean;
  size?: 'retrieve' | 'enroll' | 'check';
};

function Button({ name, onClick, fullWidth, size }: ButtonProps) {
  const resolvedColor = () => {
    if (name === '수정') return 'disabled';
    /* if (name === '확인') return 'check'; */
    if (name === '목록') return 'list';
    if (name === '찾아보기') return 'filesearch';
    if (name === '삭제') return 'delete';
    if (name === '취소') return 'cancel';
    if (name === '등록') return 'enrolll';
    return 'primary';
  };

  const sizeClass = size ? styles[size] : '';

  return (
    <button
      className={`${styles.button} ${styles[resolvedColor()]} ${
        fullWidth && styles.fullWidth
      } ${sizeClass}`}
      onClick={onClick}
    >
      {name}
    </button>
  );
}

export default Button;
