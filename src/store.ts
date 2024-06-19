
import { configureStore } from '@reduxjs/toolkit';
import catalogueReducer from './features/catalogue/catalogueSlice';

const store = configureStore({
  reducer: {
    catalogue: catalogueReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
