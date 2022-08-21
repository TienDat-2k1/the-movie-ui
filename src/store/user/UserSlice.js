import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isLogged: false,
  user: {},
  isLoading: false,
  error: undefined,
  wishlist: [],
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    signUpStart: state => {
      state.error = undefined;
    },
    signUpSuccess: state => {
      state.error = undefined;
    },
    signUpError: (state, action) => {
      state.error = action.payload;
    },
    signInStart: state => {
      state.error = undefined;
    },
    signInSuccess: (state, action) => {
      state.error = undefined;
      state.isLogged = true;
      state.user = action.payload;
    },
    signInError: (state, action) => {
      state.error = action.payload;
    },
    signOut: state => {
      state.isLogged = false;
      state.user = {};
    },
    setWishlist: (state, action) => {
      const existingItem = state.wishlist.find(item => item === action.payload);
      if (!existingItem) {
        state.wishlist.push(action.payload);
      }
      if (existingItem) {
        state.wishlist = state.wishlist.filter(item => item !== action.payload);
      }
    },
  },
});

export const {
  signUpStart,
  signUpSuccess,
  signUpError,
  signInStart,
  signInSuccess,
  signInError,
  setWishlist,
  signOut,
} = userSlice.actions;

export default userSlice.reducer;
