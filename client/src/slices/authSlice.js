import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isLoggedIn: !!localStorage.getItem('token'), 
  user: JSON.parse(localStorage.getItem('user')) || null,
  token: localStorage.getItem('token') || null, // Retrieve token from localStorage
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login: (state, action) => {
      state.isLoggedIn = true;
      state.user = action.payload;
      localStorage.setItem('user', JSON.stringify(action.payload));
    },
    logout: (state) => {
      state.isLoggedIn = false;
      state.user = null;
      localStorage.removeItem('user');
      localStorage.removeItem('token');
    },
    setUser: (state, action) => {
      state.user = action.payload;
      localStorage.setItem('user', JSON.stringify(action.payload));
    },
  },
});

export const { login, logout, setUser } = authSlice.actions;
export default authSlice.reducer;
