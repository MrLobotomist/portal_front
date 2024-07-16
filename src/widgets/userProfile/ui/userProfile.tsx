import styles from '@/widgets/userProfile/ui/userProfile.module.sass';
import grid from '@/shared/styles/grid.module.sass';
import { Input } from '@/shared/ui/input/input.tsx';
import { useSelector } from 'react-redux';
import { RootState } from '@/app/store/store.ts';
import { Button } from '@/shared/ui/button/button.tsx';
import { useEffect, useState } from 'react';
import { UserService } from '@/entities/user/service/userService.ts';
import { useUpdateProfileMutation } from '@/entities/user/api/user.ts';

const UserProfile = () => {
  const [updateProfile] = useUpdateProfileMutation();
  const user = useSelector((state: RootState) => state.user.tempUser);
  const userRoot = useSelector((state: RootState) => state.user.user);
  const [edit, setEdit] = useState<boolean>(false);

  useEffect(() => {
    UserService.init();
    return () => UserService.reset();
  }, []);

  useEffect(() => {
    UserService.init();
  }, [userRoot]);

  const btnHandler = () => {
    if (edit && userRoot != null)
      updateProfile({ ...userRoot?.profile, ...user?.profile });
    setEdit(!edit);
  };

  return (
    <div className={styles.profileContainer}>
      <div className={grid.container}>
        <div className={grid.row}>
          <div className={grid.col_2}>
            <div className={styles.sidebar}>
              <div className={styles.avatarContainer}>
                <img
                  src={
                    user?.profile?.image ?? 'https://via.placeholder.com/150'
                  }
                  alt={user?.username}
                  className={styles.avatar}
                />
              </div>
            </div>
          </div>
          <div className={grid.col_10}>
            <div className={grid.container}>
              <div className={grid.row}>
                <div className={grid.col_6}>
                  <h2 style={{ marginLeft: '12px' }}>
                    {user?.profile?.surname +
                      ' ' +
                      user?.profile?.name +
                      ' ' +
                      user?.profile?.patronymic}
                  </h2>
                </div>
                <div className={grid.col_6}>
                  <Button
                    text={edit ? 'Сохранить' : 'Редактировать'}
                    variant={edit ? 'action' : 'primary'}
                    onClick={() => btnHandler()}
                  />
                </div>
              </div>
              <div className={grid.row} style={{ alignItems: 'start' }}>
                {/* USER SECTION */}
                <div className={grid.col_12}>
                  <div className={styles.content_section}>
                    <div className={styles.section_divider}></div>
                    <h2 className={styles.section_title}>
                      Данные пользователя
                    </h2>
                    <hr className={styles.section_divider} />
                  </div>
                </div>

                {/* USER DATA */}
                <div className={grid.col_4}>
                  <Input
                    placeholder={'Фамилия:'}
                    value={user?.profile?.surname}
                    onChange={
                      edit ? (e) => UserService.setSurname(e) : () => {}
                    }
                  />
                </div>
                <div className={grid.col_4}>
                  <Input
                    placeholder={'Имя:'}
                    value={user?.profile?.name}
                    onChange={edit ? (e) => UserService.setName(e) : () => {}}
                  />
                </div>
                <div className={grid.col_4}>
                  <Input
                    placeholder={'Отчество:'}
                    value={user?.profile?.patronymic}
                    onChange={
                      edit ? (e) => UserService.setPatronymic(e) : () => {}
                    }
                  />
                </div>
                <div className={grid.col_6}>
                  <Input
                    placeholder={'Компания:'}
                    value={user?.profile?.company}
                    onChange={
                      edit ? (e) => UserService.setCompany(e) : () => {}
                    }
                  />
                </div>
                <div className={grid.col_6}>
                  <Input
                    placeholder={'Должность:'}
                    value={user?.profile?.position}
                    onChange={
                      edit ? (e) => UserService.setPosition(e) : () => {}
                    }
                  />
                </div>
                <div className={grid.col_3}>
                  <Input
                    placeholder={'Телефонный номер:'}
                    value={user?.profile?.phone_number}
                    onChange={
                      edit ? (e) => UserService.setPhoneNumber(e) : () => {}
                    }
                  />
                </div>
                <div className={grid.col_3}>
                  <Input
                    placeholder={'Дата рождения:'}
                    type={'date'}
                    value={user?.profile?.date_of_birth}
                    onChange={
                      edit ? (e) => UserService.setDateOfBirth(e) : () => {}
                    }
                  />
                </div>
                <div className={grid.col_6}>
                  <Input
                    type="textarea"
                    placeholder={'Биография:'}
                    value={user?.profile?.biography}
                    onChange={
                      edit ? (e) => UserService.setBiography(e) : () => {}
                    }
                  />
                </div>

                {/* AUTH SECTION */}
                <div className={grid.col_12}>
                  <div className={styles.content_section}>
                    <div className={styles.section_divider}></div>
                    <h2 className={styles.section_title}>Данные авторизации</h2>
                    <hr className={styles.section_divider} />
                  </div>
                </div>

                <div className={`${grid.col_4}`}>
                  <Input placeholder={'Email:'} value={user?.email} />
                </div>
                <div className={`${grid.col_4}`}>
                  <Input placeholder={'Username:'} value={user?.username} />
                </div>
                <div className={`${grid.col_4}`}>
                  <Input
                    type={'password'}
                    placeholder={'Password:'}
                    value={'smehovpavel@gmail.com'}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
