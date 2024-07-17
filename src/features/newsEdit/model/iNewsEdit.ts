import { iNews } from '@/entities/news/model/iNews.ts';

export interface iNewsEdit {
  id: number | null;
  isOpen: boolean;
  currentNews: iNews | null;
}
