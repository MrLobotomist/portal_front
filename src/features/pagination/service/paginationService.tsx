import store from '@/app/store/store.ts';
import {
  resetPagination,
  setPage,
  setPageSize,
  setPaginationUpdate,
  setTotal,
} from '@/features/pagination/model/paginationSlice.ts';

export class PaginationService {
  public static setPage(value: number): void {
    store.dispatch(setPage(value));
    store.dispatch(setPaginationUpdate(true));
  }

  public static setPageSize(value: number): void {
    const state = store.getState();
    const total = state.pagination.total ?? 0;
    const page = state.pagination.page;
    if (value >= total && page != 1) store.dispatch(setPage(1));
    store.dispatch(setPageSize(value));
    store.dispatch(setPaginationUpdate(true));
  }

  public static setTotal(value: number | null): void {
    store.dispatch(setTotal(value));
  }

  public static resetPagination(): void {
    store.dispatch(resetPagination());
    store.dispatch(setPaginationUpdate(true));
  }

  public static setPaginationUpdate(value: boolean): void {
    store.dispatch(setPaginationUpdate(value));
  }
}
