import styles from '@/widgets/userProfile/ui/userProfile.module.sass';
import grid from '@/shared/styles/grid.module.sass';
import { useSelector } from 'react-redux';
import { RootState } from '@/app/store/store.ts';
import { useEffect } from 'react';
import { UserService } from '@/entities/user/service/userService.ts';
import { UserData } from '@/features/userData/ui/userData.tsx';
import { UserDataAuth } from '@/features/userDataAuth/ui/userDataAuth.tsx';

const UserProfile = () => {
  const userRoot = useSelector((state: RootState) => state.user.user);

  useEffect(() => {
    UserService.init();
    return () => UserService.reset();
  }, []);

  useEffect(() => {
    UserService.init();
  }, [userRoot]);

  return (
    <div className={styles.profileContainer}>
      <div className={grid.container}>
        <div className={grid.row}>
          <div className={grid.col_2}>
            <div className={styles.sidebar}>
              <div className={styles.avatarContainer}>
                <img
                  src={
                    userRoot?.profile?.image ??
                    'https://via.placeholder.com/150'
                  }
                  alt={userRoot?.username}
                  className={styles.avatar}
                />
              </div>
            </div>
          </div>
          <div className={grid.col_10}>
            <div className={grid.container}>
              <UserData />
              <UserDataAuth />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
