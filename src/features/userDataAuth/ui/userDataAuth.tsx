import grid from '@/shared/styles/grid.module.sass';
import styles from '@/widgets/userProfile/ui/userProfile.module.sass';
import { Input } from '@/shared/ui/input/input.tsx';
import { Button } from '@/shared/ui/button/button.tsx';
import { useState } from 'react';
import { useUpdateUserMutation } from '@/entities/user/api/user.ts';
import { useSelector } from 'react-redux';
import { RootState } from '@/app/store/store.ts';
import Checkbox from '@/shared/ui/checkbox/checkbox.tsx';
import { UserService } from '@/entities/user/service/userService.ts';

export const UserDataAuth = () => {
  const [updateUser] = useUpdateUserMutation();
  const user = useSelector((state: RootState) => state.user.tempUser);

  const [groupsEdit, setGroupsEdit] = useState<boolean>(false);

  const editGroupsHandler = () => {
    if (groupsEdit && user != null) {
      updateUser(user);
    }
    setGroupsEdit(!groupsEdit);
  };

  return (
    <div className={grid.row}>
      <div className={grid.col_12}>
        <div className={styles.content_section}>
          <div className={styles.section_divider}></div>
          <h2 className={styles.section_title}>Данные авторизации</h2>
          <hr className={styles.section_divider} />
        </div>
      </div>

      <div className={`${grid.col_4}`}>
        <Input
          placeholder={'Email:'}
          value={user?.email}
          onChange={groupsEdit ? (e) => UserService.setEmail(e) : () => {}}
        />
      </div>

      <div className={`${grid.col_4} ${grid.offset_4}`}>
        <Button
          text={groupsEdit ? 'Сохранить' : 'Редактировать'}
          variant={groupsEdit ? 'action' : 'primary'}
          onClick={() => editGroupsHandler()}
        />
      </div>
      <div className={`${grid.col_4}`}></div>

      <div className={grid.container}>
        <div className={grid.row} style={{ marginBottom: '1rem' }}>
          <div className={`${grid.col_3}`}>
            <h3 style={{ margin: 0 }}>Права пользователя:</h3>
          </div>

          <div className={`${grid.col_3}`}>
            <Checkbox
              label={'Admin'}
              checked={user?.groups?.includes('portal_admin') ?? false}
              onChange={
                groupsEdit
                  ? () => UserService.setGroup('portal_admin')
                  : () => {}
              }
            />
          </div>

          <div className={`${grid.col_3}`}>
            <Checkbox
              label={'Writer'}
              checked={user?.groups?.includes('portal_writer') ?? false}
              onChange={
                groupsEdit
                  ? () => UserService.setGroup('portal_writer')
                  : () => {}
              }
            />
          </div>

          <div className={`${grid.col_3}`}>
            <Checkbox
              label={'Reader'}
              checked={user?.groups?.includes('portal_reader') ?? false}
              onChange={
                groupsEdit
                  ? () => UserService.setGroup('portal_reader')
                  : () => {}
              }
            />
          </div>
        </div>
      </div>
    </div>
  );
};
