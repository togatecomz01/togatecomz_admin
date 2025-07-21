import styles from './LNB.module.scss';
import MENU from '../../../constants/menu.ts';
import { Link } from 'react-router-dom';

function LNB() {
  return (
    <nav className={styles.Lnb}>
      <Link to="/" className={styles.Logo}>
        <div className={styles.image}></div>
      </Link>

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
    </nav>
  );
}

export default LNB;
