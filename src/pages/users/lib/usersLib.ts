import store from '@/app/store/store.ts';
import { resetPagination } from '@/features/pagination/model/paginationSlice.ts';
import { iGetUserParams } from '@/entities/user/model/iGetUserParams.ts';
import { resetUsers } from '@/entities/user/model/userSlice.ts';
import { resetUserFilter } from '@/features/userFilters/model/userFilterSlice.ts';

export class UsersLib {
  public static getParams() {
    const state = store.getState();
    const params: iGetUserParams = {};
    if (state.userFilter.id != null) params.id = state.userFilter.id;
    if (state.userFilter.surname != null)
      params.surname = state.userFilter.surname;
    if (state.userFilter.name != null) params.name = state.userFilter.name;
    if (state.userFilter.patronymic != null)
      params.patronymic = state.userFilter.patronymic;
    if (state.userFilter.email != null) params.email = state.userFilter.email;
    if (state.userFilter.date_of_birth != null)
      params.date_of_birth = state.userFilter.date_of_birth;
    if (state.userFilter.groups != null) params.groups = state.userFilter.groups;
    params.page = state.pagination.page;
    params.page_size = state.pagination.pageSize;
    return params;
  }

  public static reset() {
    store.dispatch(resetUsers());
    store.dispatch(resetUserFilter());
    store.dispatch(resetPagination());
  }
}
