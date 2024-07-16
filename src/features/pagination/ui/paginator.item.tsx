import { PaginationLib } from '@/features/pagination/lib/paginationLib.ts';
import { PaginationService } from '@/features/pagination/service/paginationService.tsx';
import pagin from '@/features/pagination/ui/pagination.module.sass';
import React from 'react';

interface PaginatorItemProps {
  currentLink: number;
  page: number;
  total: number;
  position: 'start' | 'end' | 'next' | 'prev' | 'item';
}

const PaginatorItem: React.FC<PaginatorItemProps> = ({
  currentLink,
  page,
  total,
  position,
}) => {
  let content = '';
  switch (position) {
    case 'start':
      content = 'В начало';
      break;
    case 'prev':
      content = '<';
      break;
    case 'next':
      content = '>';
      break;
    case 'end':
      content = 'В конец';
      break;
    default:
      content = String(currentLink);
      break;
  }
  return (
    <li
      className={PaginationLib.getClassButton(
        currentLink,
        page,
        total,
        position,
      )}
      onClick={() => PaginationService.setPage(page - 1)}
    >
      <span className={pagin.paginator_link}>{content}</span>
    </li>
  );
};
