import styles from './Header.module.scss';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <div className={styles.header}>
      <div className={styles.LogoHomeWrapper}>
        <div className={styles.Logo}></div>
        <div className={styles.HomeWrapper}>
          <Link to="/" className={styles.home} />
        </div>
      </div>
      <div className={styles.userInfo}>
        <div className={styles.image}></div>
        <div>
          <strong>홍길동 (ponibo9908@togate.kr)</strong>
          <div>주임 / 디자인팀</div>
        </div>
        <div className={styles.logout}></div>
      </div>
    </div>
  );
}

export default Header;
