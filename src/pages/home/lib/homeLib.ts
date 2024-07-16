import store from '@/app/store/store.ts';
import { iGetNewsParams } from '@/entities/news/model/iGetNewsParams.ts';
import { resetNews } from '@/entities/news/model/newsSlice.ts';
import { resetNewsFilter } from '@/features/newsFilters/model/newsFilterSlice.ts';
import { resetPagination } from '@/features/pagination/model/paginationSlice.ts';

export class HomeLib {
  public static getParams() {
    const state = store.getState();
    const params: iGetNewsParams = {};
    if (state.newsFilter.title != null) params.title = state.newsFilter.title;
    if (state.newsFilter.author != null)
      params.author = state.newsFilter.author;
    if (state.newsFilter.date_gt != null)
      params.date_gt = state.newsFilter.date_gt;
    if (state.newsFilter.date_lt != null)
      params.date_lt = state.newsFilter.date_lt;
    if (state.newsFilter.user_id != null)
      params.user_id = state.newsFilter.user_id;
    params.page = state.pagination.page;
    params.page_size = state.pagination.pageSize;
    return params;
  }

  public static reset() {
    store.dispatch(resetNews());
    store.dispatch(resetNewsFilter());
    store.dispatch(resetPagination());
  }
}
