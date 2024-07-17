import styles from '@/widgets/navbar/ui/navbar.module.sass';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RootState } from '@/app/store/store.ts';

const Navbar = () => {
  const user = useSelector((state: RootState) => state.user.user);

  return (
    <div className={styles.navbar}>
      <div className={styles.navbar__brand}>96 NEWS</div>
      <div className={styles.navbar__item}>
        <Link to="/" className={styles.navbar__link}>
          Главная
        </Link>
      </div>
      {user?.groups.includes('portal_admin') ? (
        <div className={styles.navbar__item}>
          <Link to="/users" className={styles.navbar__link}>
            Пользователи
          </Link>
        </div>
      ) : null}
      <div className={styles.navbar__profile}>
        <Link to="/profile" className={styles.navbar__link}>
          Профиль {user?.username != null ? user?.username : ''}
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
