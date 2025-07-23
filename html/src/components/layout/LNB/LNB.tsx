import { Link } from 'react-router-dom';
import styles from './LNB.module.scss';
import Copyright from '../Copyright/Copyright.tsx';
import MENU from '../../../constants/menu.ts';

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
      <Copyright position="LNB_bottom" />
    </aside>
  );
}

export default LNB;
