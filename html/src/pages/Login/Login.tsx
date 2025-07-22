import styles from './Login.module.scss';
import LoginButton from './LoginButton/LoginButton';
import LoginInput from './LoginInput/LoginInput';

const Login = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.loginModal}>
        <div className={styles.loginHeader}>
          <h1>로그인</h1>
          <div>투게이트컴즈 개발모듈 관리자 로그인 화면입니다.</div>
        </div>
        <div className={styles.inputWrapper}>
          <LoginInput type="text" placeholder="아이디" />
          <LoginInput type="password" placeholder="비밀번호" />
        </div>
        <div className={styles.buttonWrapper}>
          <LoginButton />
          <h3>확인해주세요</h3>
          <div>
            · 비밀번호를 5회 잘못 입력하면 10분간 로그인이 제한됩니다.
            <br /> · 비밀번호는 영문, 숫자 포함 8자리 이상 입력해야 합니다.
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
