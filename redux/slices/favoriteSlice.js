import { createSlice } from "@reduxjs/toolkit";
import Cookies from "js-cookie";

const initialState = Cookies.get("favorite")
  ? { ...JSON.parse(Cookies.get("favorite")), favoriteLoading: true }
  : {
      favoriteLoading: true,
      favoriteItems: [],
    };

const favoriteSlice = createSlice({
  name: "favorite",
  initialState,
  reducers: {
    addToFavorite: (state, action) => {
      const item = action.payload.product;
      const existItem = state.favoriteItems.indexOf(item);

      // const existItem = state.favoriteItems.find((x) => x.id === item.id);
      if (existItem == -1) {
        state.favoriteItems = [...state.favoriteItems, item];
      }
      Cookies.set("favorite", JSON.stringify(state));
    },
    removeFromFavorite: (state, action) => {
      state.favoriteItems = state.favoriteItems.filter(
        (x) => x.id !== action.payload
      );
      Cookies.set("favorite", JSON.stringify(state));
    },
    hideFavoriteLoading: (state) => {
      state.favoriteLoading = false;
    },
  },
});
export const { addToFavorite, removeFromFavorite, hideFavoriteLoading } =
  favoriteSlice.actions;

export default favoriteSlice.reducer;
