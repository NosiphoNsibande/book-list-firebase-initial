import { configureStore } from '@reduxjs/toolkit';
import booksReducer from './booksSlice.js';
import usersSlice from './usersSlice';


export default configureStore({
  reducer: {
    books: booksReducer,
    users: usersSlice
  }
})