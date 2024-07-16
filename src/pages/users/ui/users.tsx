import Navbar from '@/widgets/navbar/ui/navbar.tsx';
import { Footer } from '@/widgets/footer/ui/Footer.tsx';
import styles from '@/shared/styles/main.module.sass';

export const Users = () => {
  return (
    <div className={styles.body}>
      <Navbar />
      <Footer />
    </div>
  );
};
