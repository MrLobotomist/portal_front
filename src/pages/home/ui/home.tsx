import NewsList from '@/widgets/news/newsList.tsx';
import { useGetNewsMutation } from '@/entities/news/api/newsList.ts';
import { useEffect } from 'react';
import styles from '@/shared/styles/main.module.sass';
import Navbar from '@/widgets/navbar/ui/navbar.tsx';
const Home = () => {
  const [getNews, { data }] = useGetNewsMutation();

  useEffect(() => {
    getNews({});
  }, [getNews]);

  return (
    <div className={styles.body}>
      <Navbar />
      <NewsList news={data?.results} />
    </div>
  );
};

export default Home;
