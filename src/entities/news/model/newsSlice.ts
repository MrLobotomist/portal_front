import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { iNews } from '@/entities/news/model/iNews.ts';

interface newsState {
  news: iNews[] | null;
}

// Constructor
const initialState: newsState = {
  news: null,
};

// Create state slice
const newsSlice = createSlice({
  name: 'news',
  initialState,
  reducers: {
    setNews: (state, action: PayloadAction<{ news: iNews[] | null }>) => {
      state.news = action.payload.news;
    },
    resetNews: (state) => {
      state.news = null;
    },
  },
});

// Export actions
export const { setNews, resetNews } = newsSlice.actions;

// Export reducer
export default newsSlice.reducer;
