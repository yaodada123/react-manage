import { configureStore } from '@reduxjs/toolkit';
import tabReducer from './reducers/tab';


export const store = configureStore({
  reducer: {
    tabMenu: tabReducer
  },
})