import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isLogged: false,
  user: {},
  isLoading: false,
  error: undefined,
};

const UserSlice = createSlice({
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
  },
});

export const {
  signUpStart,
  signUpSuccess,
  signUpError,
  signInStart,
  signInSuccess,
  signInError,
} = UserSlice.actions;

export default UserSlice.reducer;
