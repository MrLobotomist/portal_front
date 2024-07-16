import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { iNewsFilter } from '@/features/newsFilters/model/iNewsFilter.ts';

// Constructor
const initialState: iNewsFilter = {
  title: null,
  date_gt: null,
  date_lt: null,
  author: null,
  user_id: null,
  filtersUpdate: false,
};

// Create state slice
const newsFilterSlice = createSlice({
  name: 'newsFilter',
  initialState,
  reducers: {
    resetNewsFilter: (state) => {
      state.title = null;
      state.date_gt = null;
      state.date_lt = null;
      state.author = null;
      state.user_id = null;
    },
    setTitle: (state, action: PayloadAction<string | null>) => {
      state.title = action.payload;
    },
    setDateGT: (state, action: PayloadAction<string | null>) => {
      state.date_gt = action.payload;
    },
    setDateLT: (state, action: PayloadAction<string | null>) => {
      state.date_lt = action.payload;
    },
    setAuthor: (state, action: PayloadAction<string | null>) => {
      state.author = action.payload;
    },
    setUserId: (state, action: PayloadAction<number | null>) => {
      state.user_id = action.payload;
    },
    setFiltersUpdate: (state, action: PayloadAction<boolean | null>) => {
      state.filtersUpdate = action.payload;
    },
  },
});

// Export actions
export const {
  resetNewsFilter,
  setTitle,
  setDateGT,
  setDateLT,
  setAuthor,
  setUserId,
  setFiltersUpdate,
} = newsFilterSlice.actions;

// Export reducer
export default newsFilterSlice.reducer;
