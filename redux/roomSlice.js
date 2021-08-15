import axios from 'axios';
import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import {domain} from '../api';
/**
 *  GET rooms
 * @param {
 * roomData: {
 * price: number,
 * type: string,
 * capacity: number,
 * pets: boolean
 * }}
 */
export const getRooms = createAsyncThunk('/getRooms', async roomData => {
  try {
    const res = await axios.get(`${domain}/rooms/list`, {
      params: {...roomData},
    });
    return res?.data;
  } catch (err) {
    return err.response?.data;
  }
});

export const getRoomTypes = createAsyncThunk('/getRoomTypes', async () => {
  try {
    const res = await axios.get(`${domain}/rooms/types`);
    return res?.data;
  } catch (err) {
    return err.response?.data;
  }
});

export const getRoomCapacity = createAsyncThunk(
  '/getRoomCapacity',
  async () => {
    try {
      const res = await axios.get(`${domain}/rooms/capacity`);
      return res?.data;
    } catch (err) {
      return err.response?.data;
    }
  },
);

export const roomsSlice = createSlice({
  name: 'rooms',
  initialState: {
    error: null,
    loading: false,
    roomCapacity: [],
    roomTypes: [],
    rooms: [],
  },
  reducers: {
    setError: (state, action) => {
      state.error = action.payload;
    },
    clearError: state => {
      state.error = null;
    },
    setRooms: (state, action) => {
      state.rooms = action.payload;
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
    [getRoomCapacity.pending]: state => {
      state.loading = true;
    },
    [getRoomCapacity.fulfilled]: (state, action) => {
      state.loading = false;
      state.roomCapacity = action.payload?.roomCapacity;
    },
    [getRoomCapacity.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.error?.message;
    },
    [getRoomTypes.pending]: state => {
      state.loading = true;
    },
    [getRoomTypes.fulfilled]: (state, action) => {
      state.loading = false;
      state.roomTypes = action.payload?.roomTypes;
    },
    [getRoomTypes.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.error?.message;
    },
  },
});

export const {clearError, setError, setRooms} = roomsSlice.actions;
export const roomsState = state => state.rooms;
export default roomsSlice.reducer;
