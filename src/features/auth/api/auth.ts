import { api } from '@/app/api/api.ts';
import { setTokens } from '@/features/auth/model/authSlice.ts';

export const auth = api.injectEndpoints({
  endpoints: (builder) => ({
    login: builder.mutation({
      query: () => ({
        url: '/auth/',
        method: 'POST',
      }),
      async onQueryStarted(_body, { dispatch, queryFulfilled }) {
        const { data } = await queryFulfilled;
        dispatch(
          setTokens({
            accessToken: data.access,
            refreshToken: data.refresh,
            user_id: data.user_id,
          }),
        );
      },
    }),
  }),
  overrideExisting: false,
});

export const { useLoginMutation } = auth;
