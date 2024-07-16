import pagin from '@/features/pagination/ui/pagination.module.sass';
import grid from '@/shared/styles/grid.module.sass';
import { useSelector } from 'react-redux';
import { RootState } from '@/app/store/store.ts';
import { PaginationLib } from '@/features/pagination/lib/paginationLib.ts';
import { v4 as uuidv4 } from 'uuid';
import { PaginationService } from '@/features/pagination/service/paginationService.tsx';
import { PaginatorItem } from '@/features/pagination/ui/paginator.item.tsx';

export const Paginator = () => {
  const page = useSelector((state: RootState) => state.pagination.page);
  const pageSize = useSelector((state: RootState) => state.pagination.pageSize);
  const total = useSelector((state: RootState) => state.pagination.total);

  const totalPage = total != null ? Math.ceil(total / pageSize) : 0;

  return total != null ? (
    <>
      <div className={`${grid.container}`}>
        <div className={`${grid.row}`}>
          <div className={`${grid.col_6}`} style={{ justifyContent: 'center' }}>
            <ul className={pagin.paginator}>
              <PaginatorItem
                currentLink={1}
                page={page}
                totalPage={totalPage}
                position={'start'}
              />
              <PaginatorItem
                currentLink={page - 1}
                page={page}
                totalPage={totalPage}
                position={'prev'}
              />
              {PaginationLib.getPageNumbers(page, totalPage).map((item) => {
                return (
                  <PaginatorItem
                    currentLink={item}
                    page={page}
                    totalPage={totalPage}
                    position={'item'}
                    key={uuidv4()}
                  />
                );
              })}
              <PaginatorItem
                currentLink={page + 1}
                page={page}
                totalPage={totalPage}
                position={'next'}
              />
              <PaginatorItem
                currentLink={totalPage}
                page={page}
                totalPage={totalPage}
                position={'end'}
              />
            </ul>
          </div>
          <div className={`${grid.col_6}`} style={{ justifyContent: 'center' }}>
            <p className={pagin.paginator_title}>На странице:</p>
            <ul className={pagin.paginator}>
              <li
                className={`${pagin.paginator_item} ${pageSize == 5 ? pagin.active : ''}`}
                onClick={() => PaginationService.setPageSize(5)}
              >
                <span className={pagin.paginator_link}>5</span>
              </li>
              <li
                className={`${pagin.paginator_item} ${pageSize == 10 ? pagin.active : ''}`}
                onClick={() => PaginationService.setPageSize(10)}
              >
                <span className={pagin.paginator_link}>10</span>
              </li>
              <li
                className={`${pagin.paginator_item} ${pageSize == 15 ? pagin.active : ''}`}
                onClick={() => PaginationService.setPageSize(15)}
              >
                <span className={pagin.paginator_link}>15</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  ) : null;
};
