import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { ShopDataType, ShopDetailPageType } from "../../Services/Types";
import noImage from "../../assets/images/noimage.png";
import { mockDataForShopBody } from "../../Services/LocalDataBase";

const initialState: ShopDataType = {
  defaultImageUrl: noImage,
  searchFromMenuValue: "",
  shopBodyItems: mockDataForShopBody,
  shopDetailPage: {} as ShopDetailPageType,
};

const shopSlice = createSlice({
  name: "shopSlice",
  initialState,
  reducers: {
    setSearchValueFromMenu(state, action: PayloadAction<string>) {
      state.searchFromMenuValue = action.payload;
    },
    renderShopDetailPage(state, action: PayloadAction<ShopDetailPageType>) {
      state.shopDetailPage = action.payload;
    },
  },
});

export const { setSearchValueFromMenu, renderShopDetailPage } =
  shopSlice.actions;
export default shopSlice.reducer;
