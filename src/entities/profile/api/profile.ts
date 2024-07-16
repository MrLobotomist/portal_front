import { api } from '@/app/api/api.ts';
import { iUserProfile } from '@/entities/user/model/iUser.ts';
import store from '@/app/store/store.ts';
import { setUser } from '@/entities/user/model/userSlice.ts';

export const profile = api.injectEndpoints({
  endpoints: (builder) => ({
    updateProfile: builder.mutation<iUserProfile, Partial<iUserProfile>>({
      query: (profile) => {
        return {
          url: `/profile/${profile?.id}/`,
          method: 'PATCH',
          data: { ...profile },
        };
      },
      async onQueryStarted(_body, { dispatch, queryFulfilled }) {
        const state = store.getState();
        const user = state.user.user;
        const { data } = await queryFulfilled;
        if (user != null) {
          dispatch(setUser({ ...user, profile: { ...data } }));
        }
      },
    }),
  }),
  overrideExisting: false,
});

export const { useUpdateProfileMutation } = profile;
