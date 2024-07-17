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

  // const data: User[] = React.useMemo(
  //   () => [
  //     { id: 1, name: 'John Doe', email: 'john.doe@example.com', age: 28 },
  //     { id: 2, name: 'Jane Smith', email: 'jane.smith@example.com', age: 34 },
  //     { id: 3, name: 'Sam Green', email: 'sam.green@example.com', age: 45 },
  //   ],
  //   [],
  // );

  const columns: Column<iUser>[] = React.useMemo(
    () => [
      { Header: 'ID', accessor: 'id' },
      { Header: 'Фамилия', accessor: 'profile.surname' },
      { Header: 'Имя', accessor: 'profile.name' },
      { Header: 'Отчество', accessor: 'profile.patronymic' },
      { Header: 'Email', accessor: 'email' },
      { Header: 'Дата рождения', accessor: 'profile.date_of_birth' },
      { Header: 'Права', accessor: 'groups.0' },
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

  // const [isModalOpen, setIsModalOpen] = useState(false);
  // const { register, handleSubmit, reset } = useForm();

  // const openModal = () => setIsModalOpen(true);
  // const closeModal = () => {
  //   setIsModalOpen(false);
  // };
  //
  // const {
  //   register,
  //   setValue,
  //   handleSubmit,
  //   formState: { errors },
  // } = useForm<FormData>();
  // const onSubmit = handleSubmit((data) => {
  //   console.log(data);
  //   closeModal();
  // });

  return (
    <div className={styles.body}>
      <Navbar />
      <div className={grid.container}>
        <div style={{ width: '100%' }}>
          <UserFilter />
        </div>
        {users != null ? <Table columns={columns} data={users} /> : null}
        {/*<div>*/}
        {/*  <h1>Custom Modal Example</h1>*/}
        {/*  <button*/}
        {/*    onClick={openModal}*/}
        {/*    style={{ padding: '10px 20px', fontSize: '1rem' }}*/}
        {/*  >*/}
        {/*    Open Modal*/}
        {/*  </button>*/}
        {/*  <Modal*/}
        {/*    isOpen={isModalOpen}*/}
        {/*    title="Modal Title"*/}
        {/*    content={*/}
        {/*      <form onSubmit={onSubmit}>*/}
        {/*        <label>First Name</label>*/}
        {/*        <input {...register('firstName')} />*/}
        {/*        <label>Last Name</label>*/}
        {/*        <input {...register('lastName')} />*/}
        {/*        <button type="submit">SetValue</button>*/}
        {/*      </form>*/}
        {/*    }*/}
        {/*    onClose={closeModal}*/}
        {/*  ></Modal>*/}
        {/*</div>*/}
        <Paginator />
      </div>
      <Footer />
    </div>
  );
};
