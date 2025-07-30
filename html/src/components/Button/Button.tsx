import styles from './Button.module.scss';

type ButtonProps = {
  name: string;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void; //20250725 input에서 onClick 타입을 'e'를 받을 수 있도록 수정;
  className?: string;
  variant?: 'popupDelete' | 'popupModify' | 'popupRegister' | 'alertConfirm' | 'alertSmallConfirm'; //20250724 variant prop 확장
};

const btnStyleMap: Record<string, string> = {
  목록: 'list',
  등록: 'enroll',
  삭제: 'delete',
  찾아보기: 'check',
  'ID 중복확인': 'check',
  조회: 'search',
  수정: 'modify',
  취소: 'delete',
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
