import styles from '@/widgets/navbar/ui/navbar.module.sass';

const Navbar = () => {
  return (
    <div className={styles.navbar}>
      <div className={styles.navbar__brand}>TOP NEWS</div>
      <div className={styles.navbar__item}>
        <div className={styles.navbar__link}>Главная</div>
      </div>
      <div className={styles.navbar__item}>
        <div className={styles.navbar__link}>Пользователи</div>
      </div>
      <div className={styles.navbar__profile}>
        <div className={styles.navbar__link}>Профиль</div>
      </div>
    </div>
  );
};

export default Navbar;
