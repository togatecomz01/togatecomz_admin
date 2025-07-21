import styles from './Button.module.scss';

type ButtonProps = {
  name: string;
  fullWidth?: boolean;
};

function Button({ name, fullWidth }: ButtonProps) {
  const resolvedColor = () => {
    if (name === '목록' || name === '수정') return 'disabled';
    if (name === '취소' || name === '삭제') return 'cancel';
    return 'primary';
  };

  return (
    <button
      className={`${styles.button} ${styles[resolvedColor()]} ${
        fullWidth && styles.fullWidth
      }`}
    >
      {name}
    </button>
  );
}

export default Button;
