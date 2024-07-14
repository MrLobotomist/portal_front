import NewsList from '@/widgets/news/newsList.tsx';
import { useGetNewsMutation } from '@/entities/news/api/newsList.ts';
import { useEffect } from 'react';
import styles from '@/shared/styles/main.module.sass';
const Home = () => {
  const [getNews, { data }] = useGetNewsMutation();

  useEffect(() => {
    getNews({});
  }, [getNews]);

  return (
    <div className={styles.body}>
      <NewsList news={data?.results} />
    </div>
  );
};

export default Home;
