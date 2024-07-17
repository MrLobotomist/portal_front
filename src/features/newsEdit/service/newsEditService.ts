import store from '@/app/store/store.ts';
import { setCurrentNews, setID, setIsOpen } from '../model/newsEditSlice';
import { iNews } from '@/entities/news/model/iNews.ts';

export class NewsEditService {
  public static setID(id: number | null) {
    store.dispatch(setID(id));
    store.dispatch(setIsOpen(true));
  }

  public static reset() {
    store.dispatch(setIsOpen(false));
    store.dispatch(setID(null));
    store.dispatch(setCurrentNews(null));
  }

  public static setIsOpen(isOpen: boolean) {
    store.dispatch(setIsOpen(isOpen));
  }

  private static updateFields(news: Partial<iNews>): void {
    const state = store.getState();
    const currentNews = state.newsEdit.currentNews;
    store.dispatch(
      setCurrentNews({
        ...currentNews,
        ...news,
      }),
    );
  }

  public static setTitle(title: string) {
    NewsEditService.updateFields({ title: title });
  }

  public static setContent(content: string) {
    NewsEditService.updateFields({ content: content });
  }

  public static setImage(image: string) {
    NewsEditService.updateFields({ image: image });
  }
}
