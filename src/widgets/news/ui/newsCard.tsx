import React from 'react';
import { iNews } from '@/entities/news/model/iNews.ts';
import styles from '@/widgets/news/ui/newsCard.module.sass';
import { useSelector } from 'react-redux';
import { RootState } from '@/app/store/store.ts';
import { Button } from '@/shared/ui/button/button.tsx';
import { NewsEditService } from '@/features/newsEdit/service/newsEditService.ts';

interface NewsCardProps {
  news: iNews | null;
}

const NewsCard: React.FC<NewsCardProps> = ({ news }) => {
  const user = useSelector((state: RootState) => state.user.user);
  const imageUrl = news ? `http://localhost:8000/media/${news.image}` : '';

  return (
    <div className={styles.newsCard}>
      <div className={styles.newsCard__content}>
        <h2 className={styles.newsCard__title}>{news?.title}</h2>
        {imageUrl && (
          <div className={styles.newsCard__imageWrapper}>
            <img
              src={imageUrl}
              alt={String(news?.title)}
              className={styles.newsCard__image}
            />
          </div>
        )}
        <p className={styles.newsCard__description}>{news?.content}</p>
        {user?.id == news?.user_id ? (
          <Button
            text={'Редактировать'}
            variant={'secondary'}
            onClick={() => NewsEditService.setID(news?.id ?? null)}
          ></Button>
        ) : null}
      </div>
      <p className={styles.newsCard__author}>
        Автор: {news?.author}. Дата публикации:{' '}
        {news?.published_date
          ? new Date(news.published_date).toLocaleDateString()
          : 'неизвестна'}
      </p>
    </div>
  );
};

export default NewsCard;
