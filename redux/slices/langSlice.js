import { createSlice } from "@reduxjs/toolkit";
import Cookies from "js-cookie";

const initialState = Cookies.get("lang")
  ? { ...JSON.parse(Cookies.get("lang")), langLoading: true }
  : {
      langLoading: true,
      lang: "en",
    };

const langSlice = createSlice({
  name: "lang",
  initialState,
  reducers: {
    saveLangValue: (state, action) => {
      const value = action.payload;
      state.lang = value;
      Cookies.set("lang", JSON.stringify(state));
    },

    hideLangLoading: (state) => {
      state.langLoading = false;
    },
  },
});
export const { saveLangValue, hideLangLoading } = langSlice.actions;
//hideLangLoading
export default langSlice.reducer;
