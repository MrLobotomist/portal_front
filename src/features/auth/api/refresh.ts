import { api } from '@/app/api/api.ts';
import { setTokens } from '@/features/auth/model/auth.ts';

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
          }),
        );
      },
    }),
  }),
  overrideExisting: false,
});

export const { useRefreshMutation } = refresh;
