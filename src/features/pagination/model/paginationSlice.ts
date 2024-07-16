import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { iPagination } from '@/features/pagination/model/iPagination.ts';

// Constructor
const initialState: iPagination = {
  page: 1,
  pageSize: 5,
  total: null,
  paginationUpdate: false,
};

// Create state slice
const paginationSlice = createSlice({
  name: 'pagination',
  initialState,
  reducers: {
    resetPagination: (state) => {
      state.page = 1;
      state.pageSize = 5;
      state.total = null;
    },
    setPage: (state, action: PayloadAction<number>) => {
      state.page = action.payload;
    },
    setPageSize: (state, action: PayloadAction<number>) => {
      state.pageSize = action.payload;
    },
    setTotal: (state, action: PayloadAction<number | null>) => {
      state.total = action.payload;
    },
    setPaginationUpdate: (state, action: PayloadAction<boolean>) => {
      state.paginationUpdate = action.payload;
    },
  },
});

// Export actions
export const {
  resetPagination,
  setPage,
  setPageSize,
  setTotal,
  setPaginationUpdate,
} = paginationSlice.actions;

// Export reducer
export default paginationSlice.reducer;
