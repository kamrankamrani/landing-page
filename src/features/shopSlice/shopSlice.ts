import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import {
  ShopDataType,
  ShopDetailPageType,
  ShopItemsDataTypes,
} from "../../Services/Types";
import noImage from "../../assets/images/noimage.png";

const initialState: ShopDataType = {
  defaultImageUrl: noImage,
  searchFromMenuValue: "",
  shopBodyItems: [] as ShopItemsDataTypes[],
  shopDetailPage: {
    technical_text: "",
    Q_A: [
      {
        question: "",
        answer: "",
      },
    ],
    images_array: [
      {
        url: "",
        index: false,
      },
    ],
    app_data: {
      webapp_link: "",
      android_link: "",
    },
    index_image_url: "",
  } as ShopDetailPageType,
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
    setShopBodyItems(state, action: PayloadAction<ShopItemsDataTypes[]>) {
      state.shopBodyItems = action.payload;
    },
    setIndexImageUrl(state, action: PayloadAction<string>) {
      state.shopDetailPage.index_image_url = action.payload;
    },
  },
});

export const {
  setSearchValueFromMenu,
  renderShopDetailPage,
  setIndexImageUrl,
  setShopBodyItems,
} = shopSlice.actions;
export default shopSlice.reducer;
