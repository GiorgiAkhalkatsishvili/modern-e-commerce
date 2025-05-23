import { configureStore } from '@reduxjs/toolkit';
import productsReducer from '../Redux/productsSlice'

const store = configureStore({
  reducer: {
    products: productsReducer,
  }
});

export default store;
