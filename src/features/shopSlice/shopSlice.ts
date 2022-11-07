import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { ShopDataType, ShopItemsDataTypes } from "../../Services/Types";
import noImage from "../../assets/images/noimage.png";

const mockDataForShopBody: ShopItemsDataTypes[] = [
  {
    id: 0,
    description: "شیر برقی 12 ولت",
    imageUrl: "",
    off: "",
    rawPrice: "350000",
  },
  {
    id: 1,
    description: "مرکز کنترل تک خروجی",
    imageUrl: "",
    off: "10",
    rawPrice: "995000",
  },
  {
    id: 2,
    description: "مرکز کنترل چهار خروجی",
    imageUrl: "",
    off: "",
    rawPrice: "1340000",
  },
  {
    id: 3,
    description: "مرکز کنترل پنج خروجی",
    imageUrl: "",
    off: "35",
    rawPrice: "1550000",
  },
];

const initialState: ShopDataType = {
  defaultImageUrl: noImage,
  searchFromMenuValue: "",
  shopBodyItems: mockDataForShopBody,
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
