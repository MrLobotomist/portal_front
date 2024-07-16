import Navbar from '@/widgets/navbar/ui/navbar.tsx';
import { Footer } from '@/widgets/footer/ui/Footer.tsx';
import styles from '@/shared/styles/main.module.sass';
import React, { useState } from 'react';
import { Column } from 'react-table';
import Table from '@/shared/ui/table/table.tsx';
import Modal from '@/shared/ui/modal/modal.tsx';
import { useForm } from 'react-hook-form';

interface User {
  id: number;
  name: string;
  email: string;
  age: number;
}

type FormData = {
  firstName: string
  lastName: string
}

export const Users = () => {
  const data: User[] = React.useMemo(
    () => [
      { id: 1, name: 'John Doe', email: 'john.doe@example.com', age: 28 },
      { id: 2, name: 'Jane Smith', email: 'jane.smith@example.com', age: 34 },
      { id: 3, name: 'Sam Green', email: 'sam.green@example.com', age: 45 },
    ],
    [],
  );

  const columns: Column<User>[] = React.useMemo(
    () => [
      { Header: 'ID', accessor: 'id' },
      { Header: 'Name', accessor: 'name' },
      { Header: 'Email', accessor: 'email' },
      { Header: 'Age', accessor: 'age' },
    ],
    [],
  );

  const [isModalOpen, setIsModalOpen] = useState(false);
  // const { register, handleSubmit, reset } = useForm();

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => {
    setIsModalOpen(false);
  };

  const {
    register,
    setValue,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();
  const onSubmit = handleSubmit((data) => {
    console.log(data);
    closeModal();
  } );

  return (
    <div className={styles.body}>
      <Navbar />
      <Table columns={columns} data={data} />
      <div>
        <h1>Custom Modal Example</h1>
        <button
          onClick={openModal}
          style={{ padding: '10px 20px', fontSize: '1rem' }}
        >
          Open Modal
        </button>
        <Modal
          isOpen={isModalOpen}
          title="Modal Title"
          content={
            <form onSubmit={onSubmit}>
              <label>First Name</label>
              <input {...register("firstName")} />
              <label>Last Name</label>
              <input {...register("lastName")} />
              <button
                type="submit"
              >
                SetValue
              </button>
            </form>
          }
          onClose={closeModal}></Modal>
      </div>
      <Footer />
    </div>
  );
};
