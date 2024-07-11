import { configureStore } from '@reduxjs/toolkit';
import commonReducer from '@store/common.ts';
import { api } from '@/shared/api/api.ts';

const store = configureStore({
  reducer: {
    common: commonReducer,
    [api.reducerPath]: api.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export default store;
