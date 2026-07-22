import { configureStore } from '@reduxjs/toolkit';
import billReducer from './modules/billStore';

export const store = configureStore({
  reducer: {
    bill: billReducer
  }
})