import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { iUser } from '@/entities/user/model/iUser.ts';
import { iTempUser } from '@/entities/user/model/iTempUser.ts';

interface newsState {
  user: iUser | null;
  tempUser: iTempUser | null;
  users: iUser[] | null;
}

// Constructor
const initialState: newsState = {
  user: null,
  tempUser: null,
  users: null,
};

// Create state slice
const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<iUser | null>) => {
      state.user = action.payload;
    },
    resetUser: (state) => {
      state.user = null;
    },
    setTempUser: (state, action: PayloadAction<iTempUser | null>) => {
      state.tempUser = action.payload;
    },
    resetTempUser: (state) => {
      state.tempUser = null;
    },
    setUsers: (state, action: PayloadAction<iUser[] | null>) => {
      state.users = action.payload;
    },
    resetUsers: (state) => {
      state.users = null;
    },
  },
});

// Export actions
export const {
  setUser,
  resetUser,
  setTempUser,
  resetTempUser,
  setUsers,
  resetUsers,
} = userSlice.actions;

// Export reducer
export default userSlice.reducer;
