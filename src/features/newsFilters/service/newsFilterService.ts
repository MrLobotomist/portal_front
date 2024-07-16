import store from '@/app/store/store.ts';
import {
  resetNewsFilter,
  setAuthor,
  setDateGT,
  setDateLT,
  setFiltersUpdate,
  setTitle,
  setUserId,
} from '@/features/newsFilters/model/newsFilterSlice.ts';

export class NewsFilterService {
  public static setTitle(value: string | null): void {
    store.dispatch(setTitle(value));
  }

  public static setDateGT(value: string | null): void {
    store.dispatch(setDateGT(value));
  }

  public static setDateLT(value: string | null): void {
    store.dispatch(setDateLT(value));
  }

  public static setAuthor(value: string | null): void {
    store.dispatch(setAuthor(value));
  }

  public static setUserId(value: number | null): void {
    store.dispatch(setUserId(value));
  }

  public static resetFilters(): void {
    store.dispatch(resetNewsFilter());
    store.dispatch(setFiltersUpdate(true));
  }

  public static setFiltersUpdate(value: boolean): void {
    store.dispatch(setFiltersUpdate(value));
  }
}
