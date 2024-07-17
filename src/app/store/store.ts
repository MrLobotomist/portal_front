import { configureStore } from '@reduxjs/toolkit';
import authReducer from '@/features/auth/model/authSlice.ts';
import newsReducer from '@/entities/news/model/newsSlice.ts';
import newsFilterReducer from '@/features/newsFilters/model/newsFilterSlice.ts';
import paginationReducer from '@/features/pagination/model/paginationSlice.ts';
import userReducer from '@/entities/user/model/userSlice.ts';
import { api } from '@/app/api/api.ts';
import userFilterReducer from '@/features/userFilters/model/userFilterSlice.ts';

const store = configureStore({
  reducer: {
    auth: authReducer,
    news: newsReducer,
    newsFilter: newsFilterReducer,
    pagination: paginationReducer,
    user: userReducer,
    userFilter: userFilterReducer,
    [api.reducerPath]: api.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export default store;
