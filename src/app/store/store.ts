import { configureStore } from '@reduxjs/toolkit';
import authReducer from '@/features/auth/model/authSlice.ts';
import newsReducer from '@/entities/news/model/newsSlice.ts';
import { api } from '@/app/api/api.ts';

const store = configureStore({
  reducer: {
    auth: authReducer,
    news: newsReducer,
    [api.reducerPath]: api.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export default store;
