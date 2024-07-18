import { useGetNewsMutation } from '@/entities/news/api/newsList.ts';
import { useEffect } from 'react';
import styles from '@/shared/styles/main.module.sass';
import newsCard from '@/widgets/news/ui/newsCard.module.sass';
import grid from '@/shared/styles/grid.module.sass';
import Navbar from '@/widgets/navbar/ui/navbar.tsx';
import { Paginator } from '@/features/pagination/ui/paginator.tsx';
import { Footer } from '@/widgets/footer/ui/Footer.tsx';
import { NewsFilters } from '@/features/newsFilters/ui/newsFilters.tsx';
import NewsCard from '@/widgets/news/ui/newsCard.tsx';
import { HomeLib } from '@/pages/home/lib/homeLib.ts';
import { useSelector } from 'react-redux';
import { RootState } from '@/app/store/store.ts';
import { NewsFilterService } from '@/features/newsFilters/service/newsFilterService.ts';
import { PaginationService } from '@/features/pagination/service/paginationService.tsx';

const Home = () => {
  const [getNews, { data }] = useGetNewsMutation();
  const filtersUpdate = useSelector(
    (state: RootState) => state.newsFilter.filtersUpdate,
  );
  const paginationUpdate = useSelector(
    (state: RootState) => state.pagination.paginationUpdate,
  );

  useEffect(() => {
    PaginationService.setPage(1);
    return () => HomeLib.reset();
  }, []);

  useEffect(() => {
    if (filtersUpdate) {
      NewsFilterService.setFiltersUpdate(false);
      PaginationService.setPage(1);
    }
  }, [filtersUpdate]);

  useEffect(() => {
    if (paginationUpdate) {
      getNews(HomeLib.getParams());
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
        <NewsFilters />
        <div className={grid.base}>
          <div className={grid.col_12} style={{ justifyContent: 'center' }}>
            <div className={newsCard.cardWrapper}>
              {data?.results != null
                ? data?.results.map((newsItem) => (
                    <NewsCard key={newsItem.id} news={newsItem} />
                  ))
                : 'Новости отсутствуют'}
            </div>
          </div>
        </div>
      </div>

      <div className={grid.col_12} style={{ justifyContent: 'center' }}>
        <Paginator />
      </div>

      <Footer />
    </div>
  );
};

export default Home;
