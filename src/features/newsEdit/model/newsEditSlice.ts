import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { iNewsEdit } from '@/features/newsEdit/model/iNewsEdit.ts';
import { iNews } from '@/entities/news/model/iNews.ts';

// Constructor
const initialState: iNewsEdit = {
  id: null,
  isOpen: false,
  currentNews: null,
};

// Create state slice
const newsFilterSlice = createSlice({
  name: 'newsFilter',
  initialState,
  reducers: {
    setID: (state, action: PayloadAction<number | null>) => {
      state.id = action.payload;
    },
    setIsOpen: (state, action: PayloadAction<boolean>) => {
      state.isOpen = action.payload;
    },
    setCurrentNews: (state, action: PayloadAction<iNews | null>) => {
      state.currentNews = action.payload;
    },
  },
});

// Export actions
export const { setID, setIsOpen, setCurrentNews } = newsFilterSlice.actions;

// Export reducer
export default newsFilterSlice.reducer;
