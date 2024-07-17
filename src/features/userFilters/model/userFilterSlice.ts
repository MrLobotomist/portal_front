import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { iUserFilter } from '@/features/userFilters/model/iUserFilter.ts';

// Constructor
const initialState: iUserFilter = {
  id: null,
  surname: null,
  name: null,
  patronymic: null,
  email: null,
  date_of_birth: null,
  groups: null,
  userFilterUpdate: false,
};

// Create state slice
const userFilterSlice = createSlice({
  name: 'userFilter',
  initialState,
  reducers: {
    resetUserFilter: (state) => {
      state.id = null;
      state.surname = null;
      state.name = null;
      state.patronymic = null;
      state.email = null;
      state.date_of_birth = null;
      state.groups = null;
    },
    setID: (state, action: PayloadAction<number | null>) => {
      state.id = action.payload;
    },
    setSurname: (state, action: PayloadAction<string | null>) => {
      state.surname = action.payload;
    },
    setName: (state, action: PayloadAction<string | null>) => {
      state.name = action.payload;
    },
    setPatronymic: (state, action: PayloadAction<string | null>) => {
      state.patronymic = action.payload;
    },
    setEmail: (state, action: PayloadAction<string | null>) => {
      state.email = action.payload;
    },
    setDateOfBirth: (state, action: PayloadAction<string | null>) => {
      state.date_of_birth = action.payload;
    },
    setGroups: (state, action: PayloadAction<string | null>) => {
      state.groups = action.payload;
    },
    setUserFilterUpdate: (state, action: PayloadAction<boolean>) => {
      state.userFilterUpdate = action.payload;
    },
  },
});

// Export actions
export const {
  setID,
  setSurname,
  setName,
  setPatronymic,
  setEmail,
  setDateOfBirth,
  setGroups,
  resetUserFilter,
  setUserFilterUpdate,
} = userFilterSlice.actions;

// Export reducer
export default userFilterSlice.reducer;
