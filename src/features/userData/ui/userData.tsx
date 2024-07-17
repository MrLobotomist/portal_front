import grid from '@/shared/styles/grid.module.sass';
import { Button } from '@/shared/ui/button/button.tsx';
import styles from '@/widgets/userProfile/ui/userProfile.module.sass';
import { Input } from '@/shared/ui/input/input.tsx';
import { UserService } from '@/entities/user/service/userService.ts';
import { InputFile } from '@/shared/ui/input/inputFile.tsx';
import React from 'react';

const UserData:React.FC<> = ({ user, edit, editHandler }) => {
  return (
    <>
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
            onClick={() => editHandler()}
          />
        </div>
      </div>
      <div className={grid.row} style={{ alignItems: 'start' }}>
        {/* USER SECTION */}
        <div className={grid.col_12}>
          <div className={styles.content_section}>
            <div className={styles.section_divider}></div>
            <h2 className={styles.section_title}>Данные пользователя</h2>
            <hr className={styles.section_divider} />
          </div>
        </div>

        {/* USER DATA */}
        <div className={grid.col_4}>
          <Input
            placeholder={'Фамилия:'}
            value={user?.profile?.surname}
            onChange={edit ? (e) => UserService.setSurname(e) : () => {}}
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
            onChange={edit ? (e) => UserService.setPatronymic(e) : () => {}}
          />
        </div>
        <div className={grid.col_6}>
          <Input
            placeholder={'Компания:'}
            value={user?.profile?.company}
            onChange={edit ? (e) => UserService.setCompany(e) : () => {}}
          />
        </div>
        <div className={grid.col_6}>
          <Input
            placeholder={'Должность:'}
            value={user?.profile?.position}
            onChange={edit ? (e) => UserService.setPosition(e) : () => {}}
          />
        </div>
        <div className={grid.col_3}>
          <Input
            placeholder={'Телефонный номер:'}
            value={user?.profile?.phone_number}
            onChange={edit ? (e) => UserService.setPhoneNumber(e) : () => {}}
          />
        </div>
        <div className={grid.col_3}>
          <Input
            placeholder={'Дата рождения:'}
            type={'date'}
            value={user?.profile?.date_of_birth}
            onChange={edit ? (e) => UserService.setDateOfBirth(e) : () => {}}
          />
        </div>
        <div className={grid.col_6}>
          <Input
            type="textarea"
            placeholder={'Биография:'}
            value={user?.profile?.biography}
            onChange={edit ? (e) => UserService.setBiography(e) : () => {}}
          />
        </div>

        {/* IMAGE */}
        {edit ? (
          <div className={`${grid.col_6} ${grid.offset_6}`}>
            <InputFile
              value={user?.profile?.image ?? ''}
              placeholder={'Аватар:'}
              onChange={(e) => handleImageChange(e)}
            />
          </div>
        ) : null}
      </div>
    </>
  );
};
