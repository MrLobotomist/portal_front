import React from 'react';
import { useTable, useSortBy, Column } from 'react-table';
import table from '@/shared/ui/table/table.module.sass';
import { iUser } from '@/entities/user/model/iUser.ts';

interface TableProps<T extends object> {
  columns: Column<T>[];
  data: T[];
}

const UserTable: React.FC<TableProps<iUser>> = ({ columns, data }) => {
  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable<iUser>(
      {
        columns,
        data,
      },
      useSortBy, // Добавляем хук сортировки
    );

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
                {/*<span>*/}
                {/*  {column.isSorted ? (column.isSortedDesc ? ' 🔽' : ' 🔼') : ''}*/}
                {/*</span>*/}
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
