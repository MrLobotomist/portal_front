import { api } from '@/app/api/api.ts';
import { iUser, iUserProfile } from '@/entities/user/model/iUser.ts';
import { setUser } from '@/entities/user/model/userSlice.ts';
import store from '@/app/store/store.ts';

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
    // updateUser: builder.mutation<iUser, void>({
    //   query: () => {
    //     const state = store.getState();
    //     const user = state.user.tempUser;
    //     return {
    //       url: `/users/${user?.id}/`, // Убедитесь, что у iUser есть поле id
    //       method: 'PUT',
    //       body: { ...user },
    //     };
    //   },
    //   async onQueryStarted(_body, { dispatch, queryFulfilled }) {
    //     const { data } = await queryFulfilled;
    //     console.log(data);
    //     dispatch(setUser(data));
    //   },
    // }),
    updateProfile: builder.mutation<iUserProfile, Partial<iUserProfile>>({
      query: (profile) => {
        console.log('profile', profile);
        console.log('url', `/profile/${profile?.id}/`);
        return {
          url: `/profile/${profile?.id}/`,
          method: 'PATCH',
          body: { ...profile },
        };
      },
      // async onQueryStarted(_body, { dispatch, queryFulfilled }) {
      //   const state = store.getState();
      //   const user = state.user.user;
      //   const { data } = await queryFulfilled;
      //   console.log('data', data);
      //   if (user != null) {
      //     dispatch(setUser({ ...user, profile: { ...data } }));
      //   }
      // },
    }),
  }),
  overrideExisting: false,
});

export const {
  useGetUserQuery,
  // useUpdateUserMutation,
  useUpdateProfileMutation,
} = user;
