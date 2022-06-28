import { configureStore } from '@reduxjs/toolkit';
import mainReducer from './slices/mainSlices';

export const store = configureStore({
  reducer: {
    main: mainReducer
  }
});
