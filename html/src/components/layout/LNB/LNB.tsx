import styles from './LNB.module.scss';
import MENU from '../../../constants/menu.ts';
import { Link } from 'react-router-dom';

function LNB() {
  return (
    <aside className={styles.Lnb}>
      <div className={styles.Menu}>
        {MENU.map(menu => (
          <div key={menu.name}>
            <h3 className={styles.MenuTitle}>{menu.name}</h3>
            <ul>
              {menu.children.map(child => (
                <Link
                  key={child.name}
                  to={child.path}
                  className={styles.SubMenuItem}
                >
                  {child.name}
                </Link>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </aside>
  );
}

export default LNB;
