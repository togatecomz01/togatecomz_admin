import { Link, useLocation } from 'react-router-dom';
import styles from './LNB.module.scss';
import Copyright from '../Copyright/Copyright.tsx';
import MENU from '../../../constants/menu.ts';

function LNB() {
  // classname(selected) 확인용 로직
  const location = useLocation();

  return (
    <aside className={styles.Lnb}>
      <nav className={styles.Menu}>
        {MENU.map(menu => (
          <section key={menu.name}>
            <h3 className={styles.MenuTitle}>{menu.name}</h3>
            <ul className={styles.SubMenu}>
              {menu.children.map(child => {
                // classname(selected) 확인용 로직
                const isSelected = location.pathname === child.path;

                return (
                  <li key={child.name}>
                    <Link to={child.path ? child.path : '#'} className={`${styles.SubMenuItem} ${isSelected ? styles.selected : ''}`}>
                      <i className={`${styles.Icon} ${styles[child.class]}`}></i>
                      {child.name}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </section>
        ))}
      </nav>
      <Copyright position="LNB_bottom" />
    </aside>
  );
}

export default LNB;
