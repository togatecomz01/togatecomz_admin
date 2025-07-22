import styles from './LoginInput.module.scss';

const LoginInput = ({
  type,
  placeholder,
}: {
  type: string;
  placeholder: string;
}) => {
  return (
    <input
      className={styles.loginInput}
      type={type}
      placeholder={placeholder}
    />
  );
};

export default LoginInput;
