"use client";
import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./slices/cartSlice";
import wishlistReducer from "./slices/wishlistSlice";
import userReducer from "./slices/userSlice";
import {
  cartLocalStorageMiddleware,
  wishlistLocalStorageMiddleware,
} from "./middleware/localStorage";

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    wishlist: wishlistReducer,
    user: userReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      cartLocalStorageMiddleware,
      wishlistLocalStorageMiddleware
    ),
});

export default store;
