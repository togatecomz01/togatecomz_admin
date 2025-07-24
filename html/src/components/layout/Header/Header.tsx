import styles from './Header.module.scss';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <div className={styles.header}>
      {/* 좌측 상단 로고, 홈아이콘 영역 */}
      <div className={styles.LogoHomeWrapper}>
        <div className={styles.Logo}></div>
        <div className={styles.HomeWrapper}>
          <Link to="/" className={styles.home} />
        </div>
      </div>
      <div className={styles.UserInfoWrapper}>
        {/* 우측 상단 사용자 정보 영역 */}
        <div className={styles.userInfo}>
          <div className={styles.userImage}></div>
          <div className={styles.userText}>
            <div className={styles.userProfile}>홍길동 (ponibo9908@togate.kr)</div>
            <div className={styles.userPosition}>주임 / 디자인팀</div>
          </div>
        </div>
        {/* 로그아웃 버튼 */}
        <button className={styles.logout}></button>
      </div>
    </div>
  );
}

export default Header;
