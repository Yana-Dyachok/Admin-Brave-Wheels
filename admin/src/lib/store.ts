import { configureStore } from '@reduxjs/toolkit';
import checkedItemSlice from './slices/checked-item-slice';

export const makeStore = () =>
  configureStore({
    reducer: {
      checked: checkedItemSlice,
    },
  });

const store = makeStore();

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type AppStore = typeof store;

export default store;