import { api } from '@/app/api/api.ts';
import { setTokens } from '@/features/auth/model/auth.ts';

export const login = api.injectEndpoints({
  endpoints: (builder) => ({
    login: builder.mutation({
      query: ({ username, password }) => ({
        url: '/token/',
        method: 'POST',
        body: {
          username: username,
          password: password,
        },
      }),
      async onQueryStarted(_body, { dispatch, queryFulfilled }) {
        const { data } = await queryFulfilled;
        dispatch(
          setTokens({
            accessToken: data.access,
            refreshToken: data.refresh,
          }),
        );
      },
    }),
  }),
  overrideExisting: false,
});

export const { useLoginMutation } = login;
