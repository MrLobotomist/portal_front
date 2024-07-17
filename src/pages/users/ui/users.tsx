import Navbar from '@/widgets/navbar/ui/navbar.tsx';
import { Footer } from '@/widgets/footer/ui/Footer.tsx';
import styles from '@/shared/styles/main.module.sass';
import React, { useEffect } from 'react';
import { Column } from 'react-table';
import Table from '@/shared/ui/table/table.tsx';
// import Modal from '@/shared/ui/modal/modal.tsx';
// import { useForm } from 'react-hook-form';
import { useSelector } from 'react-redux';
import { RootState } from '@/app/store/store.ts';
import { iUser } from '@/entities/user/model/iUser.ts';
import { UserFilter } from '@/features/userFilters/ui/userFilter.tsx';
import { useGetUsersFilterMutation } from '@/entities/user/api/user.ts';
import { Paginator } from '@/features/pagination/ui/paginator.tsx';
import { PaginationService } from '@/features/pagination/service/paginationService.tsx';
import { UserFilterService } from '@/features/userFilters/service/userFilterSevrice.ts';
import { UsersLib } from '@/pages/users/lib/usersLib.ts';
import grid from '@/shared/styles/grid.module.sass';

export const Users = () => {
  const [getUsers, { data }] = useGetUsersFilterMutation();

  const users = useSelector((state: RootState) => state.user.users);

  const columns: Column<iUser>[] = React.useMemo(
    () => [
      { Header: 'ID', accessor: 'id' as const },
      { Header: 'Фамилия', accessor: (row) => row?.profile?.surname },
      { Header: 'Имя', accessor: (row) => row?.profile?.name },
      { Header: 'Отчество', accessor: (row) => row?.profile?.patronymic },
      { Header: 'Email', accessor: 'email' as const },
      {
        Header: 'Дата рождения',
        accessor: (row) => row?.profile?.date_of_birth,
      },
      {
        Header: 'Права',
        accessor: (row: iUser) => row?.groups?.join('; '),
      },
    ],
    [],
  );

  const filtersUpdate = useSelector(
    (state: RootState) => state.userFilter.userFilterUpdate,
  );
  const paginationUpdate = useSelector(
    (state: RootState) => state.pagination.paginationUpdate,
  );

  useEffect(() => {
    PaginationService.setPage(1);
    return () => UsersLib.reset();
  }, []);

  useEffect(() => {
    if (filtersUpdate) {
      UserFilterService.setFiltersUpdate(false);
      PaginationService.setPage(1);
    }
  }, [filtersUpdate]);

  useEffect(() => {
    if (paginationUpdate) {
      getUsers(UsersLib.getParams());
      PaginationService.setPaginationUpdate(false);
      if (data != null) {
        PaginationService.setTotal(data.count);
      }
    }
  }, [paginationUpdate]);

  useEffect(() => {
    if (data != null) {
      PaginationService.setTotal(data.count);
    }
  }, [data]);

  return (
    <div className={styles.body}>
      <Navbar />
      <div className={grid.container}>
        <div style={{ width: '100%' }}>
          <UserFilter />
        </div>
        {users != null ? <Table columns={columns} data={users} /> : null}
        <Paginator />
      </div>
      <Footer />
    </div>
  );
};
