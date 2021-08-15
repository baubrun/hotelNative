import {configureStore} from '@reduxjs/toolkit';
import roomReducer from './roomSlice';
import errorReducer from './errorSlice';

export default configureStore({
  reducer: {
    rooms: roomReducer,
    error: errorReducer,
  },
});
