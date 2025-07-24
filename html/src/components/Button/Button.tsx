import styles from './Button.module.scss';

type ButtonProps = {
  name: string;
  onClick?: () => void;
  className?: string;
  variant?: 'popupDelete' | 'popupModify' | 'popupRegister' //20250724 variant prop 확장
};

const btnStyleMap: Record<string, string> = {
  목록: 'list',
  등록: 'enroll',
  삭제: 'delete',
  찾아보기: 'check',
  'ID 중복확인': 'check',
  조회: 'search',
  수정: 'modify',
};

const Button = ({ name, onClick, className, variant }: ButtonProps) => {
  const resolvedColor = btnStyleMap[name] ?? '';
  const variantClass = variant ? styles[variant] : ''; //20250724 variant 값에 따라 동적으로 클래스 적용
  const combinedClassName = `${styles.primary} ${resolvedColor && styles[resolvedColor]} ${variantClass} ${className || ''}`.trim();

  return (
    <button className={combinedClassName} onClick={onClick}>
      {name}
    </button>
  );
};

export default Button;
