import axios from 'axios';
import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import {domain} from '../api';

export const getRooms = createAsyncThunk('/getRooms', async () => {
  try {
    const res = await axios.get(`${domain}/rooms/list`);
    return res?.data;
  } catch (err) {
    return err.response?.data;
  }
});

export const roomsSlice = createSlice({
  name: 'rooms',
  initialState: {
    rooms: [],
    loading: false,
    error: null,
  },
  reducers: {
    setError: (state, action) => {
      state.error = action.payload;
    },
    clearError: state => {
      state.error = null;
    },
  },
  extraReducers: {
    [getRooms.pending]: state => {
      state.loading = true;
    },
    [getRooms.fulfilled]: (state, action) => {
      state.loading = false;
      state.rooms = action.payload?.rooms;
    },
    [getRooms.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.error?.message;
    },
  },
});

export const {clearError, setError} = roomsSlice.actions;
export const roomsState = state => state.rooms;
export default roomsSlice.reducer;
