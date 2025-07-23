import Copyright from '../../components/layout/Copyright/Copyright';
import styles from './Login.module.scss';
import LoginButton from './LoginButton/LoginButton';
import LoginInput from './LoginInput/LoginInput';

const Login = () => {
  return (
    <div className={styles.wrapper}>
      {/* 로그인 모달 */}
      <div className={styles.loginModal}>
        {/* 우측 상단 로고 */}
        <div className={styles.Logo}></div>
        <div className={styles.loginContent}>
          {/* 텍스트 영역 */}
          <div className={styles.loginHeader}>
            <h1 className={styles.title}>로그인</h1>
            <div className={styles.subText}>투게이트컴즈 개발모듈 관리자 로그인 화면입니다.</div>
          </div>
          {/* 인풋 영역 */}
          <form className={styles.Form}>
            <div className={styles.inputWrapper}>
              <LoginInput type="text" placeholder="아이디 입력" />
              <LoginInput type="password" placeholder="비밀번호 입력" />
            </div>
            <LoginButton />
          </form>
          {/* 확인사항 영역 */}
          <div className={styles.noticeWrapper}>
            <div className={styles.noticeTitle}>
              <i className={styles.Icon}></i>
              <h3>확인해주세요</h3>
            </div>
            <ul className={styles.noticeList}>
              <li>· 비밀번호를 5회 잘못 입력하면 10분간 로그인이 제한됩니다.</li>
              <li>· 비밀번호는 영문, 숫자 포함 8자리 이상 입력해야 합니다.</li>
            </ul>
          </div>
        </div>
        <Copyright position="Login_bottom" />
      </div>
    </div>
  );
};

export default Login;
