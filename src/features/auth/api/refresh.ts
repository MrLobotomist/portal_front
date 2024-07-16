import { api } from '@/app/api/api.ts';
import { setTokens } from '@/features/auth/model/authSlice.ts';

export const refresh = api.injectEndpoints({
  endpoints: (builder) => ({
    refresh: builder.mutation({
      query: ({ refreshToken }) => ({
        url: '/token/refresh/',
        method: 'POST',
        body: {
          refresh: refreshToken,
        },
      }),
      async onQueryStarted({ refreshToken }, { dispatch, queryFulfilled }) {
        const { data } = await queryFulfilled;
        dispatch(
          setTokens({
            accessToken: data.access,
            refreshToken: refreshToken,
            user_id: data.user_id,
          }),
        );
      },
    }),
  }),
  overrideExisting: false,
});

export const { useRefreshMutation } = refresh;
