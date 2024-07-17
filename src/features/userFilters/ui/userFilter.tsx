import grid from '@/shared/styles/grid.module.sass';
import { Input } from '@/shared/ui/input/input.tsx';
import { Button } from '@/shared/ui/button/button.tsx';
import { useSelector } from 'react-redux';
import { RootState } from '@/app/store/store.ts';
import { UserFilterService } from '@/features/userFilters/service/userFilterSevrice.ts';

export const UserFilter = () => {
  const id = useSelector((state: RootState) => state.userFilter.id);
  const surname = useSelector((state: RootState) => state.userFilter.surname);
  const name = useSelector((state: RootState) => state.userFilter.name);
  const patronymic = useSelector(
    (state: RootState) => state.userFilter.patronymic,
  );
  const email = useSelector((state: RootState) => state.userFilter.email);
  const date_of_birth = useSelector(
    (state: RootState) => state.userFilter.date_of_birth,
  );
  const groups = useSelector((state: RootState) => state.userFilter.groups);

  return (
    <div className={`${grid.container}`}>
      <div className={`${grid.row}`} style={{ width: '100%' }}>
        <div className={`${grid.col_2}`}>
          <Input
            value={id}
            placeholder={'ID'}
            onChange={(e) => UserFilterService.setID(Number(e))}
          />
        </div>

        <div className={`${grid.col_2}`}>
          <Input
            value={surname}
            placeholder={'Фамилия'}
            onChange={(e) => UserFilterService.setSurname(e)}
          />
        </div>

        <div className={`${grid.col_2}`}>
          <Input
            value={name}
            placeholder={'Имя'}
            onChange={(e) => UserFilterService.setName(e)}
          />
        </div>

        <div className={`${grid.col_2}`}>
          <Input
            value={patronymic}
            placeholder={'Отчество'}
            onChange={(e) => UserFilterService.setPatronymic(e)}
          />
        </div>

        <div className={`${grid.col_2}`}>
          <Button
            text={'Поиск'}
            onClick={() => UserFilterService.setFiltersUpdate(true)}
          />
        </div>
        <div className={`${grid.col_2}`}>
          <Button
            text={'Сброс'}
            onClick={() => UserFilterService.resetFilters()}
          />
        </div>

        <div className={`${grid.col_2}`}>
          <Input
            value={email}
            placeholder={'Email'}
            onChange={(e) => UserFilterService.setEmail(e)}
          />
        </div>

        <div className={`${grid.col_2}`}>
          <Input
            type={'date'}
            value={date_of_birth}
            placeholder={'Дата рождения'}
            onChange={(e) => UserFilterService.setDateOfBirth(e)}
          />
        </div>

        <div className={`${grid.col_2}`}>
          <Input
            value={groups}
            placeholder={'Права'}
            onChange={(e) => UserFilterService.setGroups(e)}
          />
        </div>
      </div>
    </div>
  );
};
