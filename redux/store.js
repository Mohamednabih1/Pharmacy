import { configureStore } from "@reduxjs/toolkit";
import cartSliceReducer from "./slices/cartSlice";
import langSliceReducer from "./slices/langSlice";
import favoriteSliceReducer from "./slices/favoriteSlice";

export const store = configureStore({
  reducer: {
    cart: cartSliceReducer,
    lang: langSliceReducer,
    favorite: favoriteSliceReducer,
  },
  devTools: process.env.NODE_ENV !== "production",
});
