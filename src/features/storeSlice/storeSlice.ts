import { createSlice } from "@reduxjs/toolkit";
import { StoreDataType } from "../../Services/Types";
import noImage from "../../assets/images/noimage.png";

const initialState: StoreDataType = {
  defaultImageUrl: noImage,
};

const storeSlice = createSlice({
  name: "storeSlice",
  initialState,
  reducers: {},
});

export default storeSlice.reducer;
