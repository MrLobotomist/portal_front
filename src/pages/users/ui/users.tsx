import Navbar from '@/widgets/navbar/ui/navbar.tsx';
import { Footer } from '@/widgets/footer/ui/Footer.tsx';
import styles from '@/shared/styles/main.module.sass';
import React, { useState } from 'react';
import { Column } from 'react-table';
import Table from '@/shared/ui/table/table.tsx';
import Modal from '@/shared/ui/modal/modal.tsx';
interface User {
  id: number;
  name: string;
  email: string;
  age: number;
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

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <div className={styles.body}>
      <Navbar />
      <Table columns={columns} data={data} />
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
        content="This is the content of the modal."
        onClose={closeModal}
      />
      <Footer />
    </div>
  );
};
