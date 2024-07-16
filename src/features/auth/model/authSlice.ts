import { createSlice, PayloadAction } from '@reduxjs/toolkit';

// Types in CommonState
interface authState {
  accessToken: string | null;
  refreshToken: string | null;
  user_id: number | null;
}

// Constructor
const initialState: authState = {
  accessToken: localStorage.getItem('accessToken'),
  refreshToken: localStorage.getItem('refreshToken'),
  user_id: ![0, null].includes(Number(localStorage.getItem('user_id')))
    ? Number(localStorage.getItem('user_id'))
    : null,
};

// Create state slice
const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setTokens: (
      state,
      action: PayloadAction<{
        accessToken: string;
        refreshToken: string;
        user_id: number;
      }>,
    ) => {
      state.accessToken = action.payload.accessToken;
      state.refreshToken = action.payload.refreshToken;
      state.user_id = action.payload.user_id;
      localStorage.setItem('accessToken', action.payload.accessToken);
      localStorage.setItem('refreshToken', action.payload.refreshToken);
      localStorage.setItem('user_id', String(action.payload.user_id));
    },
    logout: (state) => {
      state.accessToken = null;
      state.refreshToken = null;
      state.user_id = null;
      localStorage.removeItem('accessToken');
      localStorage.removeItem('refreshToken');
      localStorage.removeItem('user_id');
    },
  },
});

// Export actions
export const { setTokens, logout } = authSlice.actions;

// Export reducer
export default authSlice.reducer;
