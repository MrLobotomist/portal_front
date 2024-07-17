import { api } from '@/app/api/api.ts';
import { iUser } from '@/entities/user/model/iUser.ts';
import { setUser, setUsers } from '@/entities/user/model/userSlice.ts';
import store from '@/app/store/store.ts';
import { iPaginationServer } from '@/shared/models/iPaginationServer.ts';
import { iGetUserParams } from '@/entities/user/model/iGetUserParams.ts';
import { iTempUser } from '@/entities/user/model/iTempUser.ts';

export const user = api.injectEndpoints({
  endpoints: (builder) => ({
    getUser: builder.query<iUser, void>({
      query: () => {
        const state = store.getState();
        const user_id = state.auth.user_id;
        return {
          url: `/users/${user_id}/`,
          method: 'GET',
        };
      },
      async onQueryStarted(_body, { dispatch, queryFulfilled }) {
        const { data } = await queryFulfilled;
        dispatch(setUser(data));
      },
    }),
    getUsers: builder.query<iPaginationServer<iUser>, void>({
      query: () => {
        return {
          url: `/users/`,
          method: 'GET',
        };
      },
      async onQueryStarted(_body, { dispatch, queryFulfilled }) {
        const { data } = await queryFulfilled;
        dispatch(setUsers(data.results));
      },
    }),
    getUsersFilter: builder.mutation<iPaginationServer<iUser>, iGetUserParams>({
      query: (params) => {
        const queryParams: Record<string, number | string | null> = {};
        if (params.page) queryParams.page = params.page;
        if (params.page_size) queryParams.page_size = params.page_size;
        if (params.id) queryParams.id = params.id;
        if (params.surname) queryParams.surname = params.surname;
        if (params.name) queryParams.name = params.name;
        if (params.patronymic) queryParams.patronymic = params.patronymic;
        if (params.email) queryParams.email = params.email;
        if (params.date_of_birth)
          queryParams.date_of_birth = params.date_of_birth;
        if (params.groups) queryParams.groups = params.groups;
        if (params.ordering) queryParams.ordering = params.ordering;
        return {
          url: '/users/',
          method: 'GET',
          params: queryParams,
        };
      },
      async onQueryStarted(_body, { dispatch, queryFulfilled }) {
        const { data } = await queryFulfilled;
        dispatch(setUsers(data.results));
      },
    }),
    updateUser: builder.mutation<iUser, iTempUser>({
      query: (user) => {
        return {
          url: `/users/${user?.id}/`,
          method: 'PATCH',
          data: { ...user },
        };
      },
      async onQueryStarted(_body, { dispatch, queryFulfilled }) {
        const { data } = await queryFulfilled;
        console.log(data);
        dispatch(setUser(data));
      },
    }),
  }),
  overrideExisting: false,
});

export const {
  useGetUserQuery,
  useUpdateUserMutation,
  useGetUsersFilterMutation,
} = user;
