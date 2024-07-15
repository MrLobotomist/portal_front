import NewsList from '@/widgets/news/newsList.tsx';
import { useGetNewsMutation } from '@/entities/news/api/newsList.ts';
import { useEffect } from 'react';
import styles from '@/shared/styles/main.module.sass';
import grid from '@/shared/styles/grid.module.sass';
import Navbar from '@/widgets/navbar/ui/navbar.tsx';
import { TextField } from '@/shared/ui/input/TextField.tsx';
import { Paginator } from '@/widgets/pagination/ui/Paginator.tsx';
import { Footer } from '@/widgets/footer/ui/Footer.tsx';
const Home = () => {
  const [getNews, { data }] = useGetNewsMutation();

  useEffect(() => {
    getNews({});
  }, [getNews]);

  return (
    <div className={styles.body}>
      <Navbar />
      <div className={grid.container}>
        <div className={grid.row}>
          <div className={grid.col_6}>
            <TextField id={'name'} placeholder={'Name'} />
          </div>
          <div className={grid.col_6}>Column 2</div>
        </div>
        <div className={grid.offset_3}>
          <div className={grid.col_6}>Column 3</div>
          <div className={grid.col_6}>
            <TextField id={'name'} placeholder={'Name'} />
          </div>
        </div>
        <div className={grid.col_12} style={{ justifyContent: 'center' }}>
          <NewsList news={data?.results} />
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
