import styles from "./ButtonContainer.module.scss";

interface ButtonContainerProps {
  children: React.ReactNode;
  className?: string;
  variant?: 'popupDoubleButton' | 'popupSingleButton'; //20250724 variant prop 확장
}

const ButtonContainer = ({ children, className, variant }: ButtonContainerProps) => {
  const variantClass = variant ? styles[variant] : ''; //20250724 variant 값에 따라 동적으로 클래스 적용
  const combinedClassName = className ? `${styles.buttonContainer} ${variantClass} ${className}` : `${styles.buttonContainer} ${variantClass}`;
  return <div className={combinedClassName.trim()}>{children}</div>;
};

export default ButtonContainer;
