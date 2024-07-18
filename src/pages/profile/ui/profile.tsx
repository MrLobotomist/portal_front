import Navbar from '@/widgets/navbar/ui/navbar.tsx';
import { Footer } from '@/widgets/footer/ui/Footer.tsx';
import styles from '@/shared/styles/main.module.sass';
import UserProfile from '@/widgets/userProfile/ui/userProfile.tsx';
import grid from '@/shared/styles/grid.module.sass';

export const Profile = () => {
  return (
    <div className={styles.body}>
      <Navbar />
      <div className={grid.profile}>
        <UserProfile />
      </div>
      <Footer />
    </div>
  );
};
