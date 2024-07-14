import React from 'react';
import { iNews } from '@/entities/news/model/iNews';
import NewsCard from './ui/newsCard';
import styles from '@/widgets/news/ui/newsCard.module.sass';

interface NewsListProps {
  news: iNews[] | null | undefined;
}

const NewsList: React.FC<NewsListProps> = ({ news }) => {
  return (
    <div className={styles.cardWrapper}>
      {news != null
        ? news.map((newsItem) => <NewsCard key={newsItem.id} news={newsItem} />)
        : 'Новости отсутсвуют'}
    </div>
  );
};

export default NewsList;
