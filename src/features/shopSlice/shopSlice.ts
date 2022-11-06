import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { ShopDataType } from "../../Services/Types";
import noImage from "../../assets/images/noimage.png";

const initialState: ShopDataType = {
  defaultImageUrl: noImage,
  searchFromMenuValue: "",
};

const shopSlice = createSlice({
  name: "shopSlice",
  initialState,
  reducers: {
    setSearchValueFromMenu(state, action: PayloadAction<string>) {
      state.searchFromMenuValue = action.payload;
    },
  },
});

export const { setSearchValueFromMenu } = shopSlice.actions;
export default shopSlice.reducer;
