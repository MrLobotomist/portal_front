import { api } from '@/app/api/api.ts';
import { setNews } from '@/entities/news/model/newsSlice.ts';
import { iPaginationServer } from '@/shared/models/iPaginationServer.ts';
import { iNews } from '@/entities/news/model/iNews.ts';
import { iGetNewsParams } from '@/entities/news/model/iGetNewsParams.ts';

export const news = api.injectEndpoints({
  endpoints: (builder) => ({
    getNews: builder.mutation<iPaginationServer<iNews>, iGetNewsParams>({
      query: (params) => {
        const queryParams: Record<string, number | string | null> = {};
        if (params.page) queryParams.page = params.page;
        if (params.page_size) queryParams.page_size = params.page_size;
        if (params.title) queryParams.title = params.title;
        if (params.author) queryParams.author = params.author;
        if (params.user_id) queryParams.user_id = params.user_id;
        if (params.date_gt) queryParams.date_gt = params.date_gt;
        if (params.date_lt) queryParams.date_lt = params.date_lt;
        if (params.ordering) queryParams.ordering = params.ordering;

        return {
          url: '/news_list/',
          method: 'GET',
          params: queryParams,
        };
      },
      async onQueryStarted(_body, { dispatch, queryFulfilled }) {
        const { data } = await queryFulfilled;
        dispatch(setNews({ news: data.results }));
      },
    }),
  }),
  overrideExisting: false,
});

export const { useGetNewsMutation } = news;
