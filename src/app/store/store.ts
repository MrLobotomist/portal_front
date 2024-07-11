import { configureStore } from '@reduxjs/toolkit';
import authReducer from '@/features/auth/model/auth.ts';
import { api } from '@/app/api/api.ts';


const store = configureStore({
  reducer: {
    auth: authReducer,
    [api.reducerPath]: api.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export default store;
