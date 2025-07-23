import styles from './LNB.module.scss';
import MENU from '../../../constants/menu.ts';
import { Link } from 'react-router-dom';

function LNB() {
  return (
    <aside className={styles.Lnb}>
      <nav className={styles.Menu}>
        {MENU.map(menu => (
          <section key={menu.name}>
            <h3 className={styles.MenuTitle}>{menu.name}</h3>
            <ul className={styles.SubMenu}>
              {menu.children.map(child => (
                <li key={child.name}>
                  <Link to={child.path} className={styles.SubMenuItem}>
                    <i className={`${styles.Icon} ${styles[child.path]}`}></i>
                    {child.name}
                  </Link>
                </li>
              ))}
            </ul>
          </section>
        ))}
      </nav>
      <p className={styles.Copyright}>ⓒ 2020. Gallery2Gate Co., Ltd All Rights Reserved.</p>
    </aside>
  );
}

export default LNB;
