import grid from '@/shared/styles/grid.module.sass';
import { Input } from '@/shared/ui/input/input.tsx';
import { Button } from '@/shared/ui/button/button.tsx';
import { NewsFilterService } from '@/features/newsFilters/service/newsFilterService.ts';
import { useSelector } from 'react-redux';
import { RootState } from '@/app/store/store.ts';

export const NewsFilters = () => {
  const title = useSelector((state: RootState) => state.newsFilter.title);
  const date_gt = useSelector((state: RootState) => state.newsFilter.date_gt);
  const date_lt = useSelector((state: RootState) => state.newsFilter.date_lt);
  const author = useSelector((state: RootState) => state.newsFilter.author);

  return (
    <div className={`${grid.container}`}>
      <div className={`${grid.row}`}>
        <div className={`${grid.col_2}`}>
          <Input
            value={title}
            placeholder={'Заголовок'}
            onChange={(e) => NewsFilterService.setTitle(e)}
          />
        </div>

        <div className={`${grid.col_4}`}>
          <Input
            value={author}
            placeholder={'Автор'}
            onChange={(e) => NewsFilterService.setAuthor(e)}
          />
        </div>

        <div className={`${grid.col_2}`}>
          <Input
            value={date_gt}
            type={'date'}
            placeholder={'С даты'}
            onChange={(e) => NewsFilterService.setDateGT(e)}
          />
        </div>

        <div className={`${grid.col_2}`}>
          <Input
            value={date_lt}
            type={'date'}
            placeholder={'По дату'}
            onChange={(e) => NewsFilterService.setDateLT(e)}
          />
        </div>

        <div className={`${grid.col_1}`}>
          <Button
            text={'Поиск'}
            onClick={() => NewsFilterService.setFiltersUpdate(true)}
          />
        </div>
        <div className={`${grid.col_1}`}>
          <Button
            text={'Сброс'}
            onClick={() => NewsFilterService.resetFilters()}
          />
        </div>
      </div>
    </div>
  );
};
