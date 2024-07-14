import React from 'react';
import { iNews } from '@/entities/news/model/iNews.ts';
import styles from '@/shared/styles/main.module.sass';

interface NewsCardProps {
  news: iNews | null;
}

const NewsCard: React.FC<NewsCardProps> = ({ news }) => {
  const imageUrl = news ? `http://localhost:8000/media/${news.image}` : '';

  return (
    <div className={styles.newsCard}>
      <div className={styles.newsCard__content}>
        <h2 className={styles.newsCard__title}>{news?.title}</h2>
        {imageUrl && (
          <img
            src={imageUrl}
            alt={String(news?.title)}
            className={styles.cardImg}
          />
        )}
        <p className={styles.newsCard__description}>{news?.content}</p>
      </div>
    </div>
  );
};

export default NewsCard;
