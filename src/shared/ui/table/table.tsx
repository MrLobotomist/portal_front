import React from 'react';
import { useTable, Column } from 'react-table';
import table from '@/shared/ui/table/table.module.sass';
import { iUser } from '@/entities/user/model/iUser.ts';

interface UserTableProps {
  columns: Column<iUser>[];
  data: iUser[];
}

const UserTable: React.FC<UserTableProps> = ({ columns, data }) => {
  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable<iUser>({
      columns,
      data,
    });

  return (
    <table {...getTableProps()} className={table.table}>
      <thead>
        {headerGroups.map((headerGroup) => (
          <tr
            {...headerGroup.getHeaderGroupProps()}
            key={`tr_${headerGroup.id}`}
          >
            {headerGroup.headers.map((column) => (
              <th {...column.getHeaderProps()} key={`th_${column.id}`}>
                {column.render('Header')}
              </th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody {...getTableBodyProps()}>
        {rows.map((row) => {
          prepareRow(row);
          return (
            <tr {...row.getRowProps()} key={`row_${row.id}`}>
              {row.cells.map((cell) => (
                <td {...cell.getCellProps()} key={`cell.row_${cell.column.id}`}>
                  {cell.render('Cell')}
                </td>
              ))}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default UserTable;
