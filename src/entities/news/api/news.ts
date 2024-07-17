import { api } from '@/app/api/api.ts';
import { iNews } from '@/entities/news/model/iNews.ts';
import { setCurrentNews } from '@/features/newsEdit/model/newsEditSlice.ts';

export const news = api.injectEndpoints({
  endpoints: (builder) => ({
    updateImage: builder.mutation<iNews, { id: number; img: FormData }>({
      query: (obj) => {
        return {
          url: `/news/${obj.id}/`,
          method: 'PATCH',
          data: obj.img,
        };
      },
    }),
    updateNews: builder.mutation<iNews, iNews>({
      query: (news) => {
        const data = {
          title: news.title,
          content: news.content,
        };
        return {
          url: `/news/${news.id}/`,
          method: 'PATCH',
          data: data,
        };
      },
    }),
    newsCreate: builder.mutation<iNews, iNews>({
      query: (news) => {
        const data = {
          title: news.title,
          content: news.content,
        };
        return {
          url: `/news/`,
          method: 'POST',
          data: data,
        };
      },
    }),
    newsGet: builder.query<iNews, number>({
      query: (id) => {
        return {
          url: `/news/${id}/`,
          method: 'GET',
        };
      },
      async onQueryStarted(_body, { dispatch, queryFulfilled }) {
        const { data } = await queryFulfilled;
        dispatch(setCurrentNews(data));
      },
    }),
  }),
  overrideExisting: false,
});

export const {
  useUpdateImageMutation,
  useNewsCreateMutation,
  useUpdateNewsMutation,
  useNewsGetQuery,
} = news;
