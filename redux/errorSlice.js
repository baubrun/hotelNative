import {createSlice} from '@reduxjs/toolkit';

export const ErrorSlice = createSlice({
  name: 'error',
  initialState: {
    message: null,
  },
  reducers: {
    setError: (state, action) => {
      state.message = action.payload;
    },
    clearError: state => {
      state.error = null;
    },
  },
});

export const {clearError, setError} = ErrorSlice.actions;
export const errorState = state => state.error.message;
export default ErrorSlice.reducer;
