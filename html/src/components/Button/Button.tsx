import styles from './Button.module.scss';

type ButtonProps = {
  name: string;
  onClick?: () => void;
};

const btnStyleMap: Record<string, string> = {
  목록: 'list',
  등록: 'enroll',
  삭제: 'delete',
  찾아보기: 'check',
  'ID 중복확인': 'check',
  조회: 'search',
};

const Button = ({ name, onClick }: ButtonProps) => {
  const resolvedColor = btnStyleMap[name] ?? '';

  return (
    <button className={`${styles.primary} ${resolvedColor && styles[resolvedColor]}`} onClick={onClick}>
      {name}
    </button>
  );
};

export default Button;
