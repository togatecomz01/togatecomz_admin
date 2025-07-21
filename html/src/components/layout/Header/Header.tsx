import styles from './Header.module.scss';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <div className={styles.header}>
      <div className={styles.userInfo}>
        <div className={styles.image}></div>
        <div>
          <strong>홍길동</strong> 님
        </div>
        <Link to="/login">로그아웃</Link>
      </div>
    </div>
  );
}

export default Header;
