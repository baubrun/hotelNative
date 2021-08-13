import {configureStore} from '@reduxjs/toolkit';
import roomReducer from './roomSlice';

export default configureStore({
  reducer: {
    rooms: roomReducer,
  },
});
