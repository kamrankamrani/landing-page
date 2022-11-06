import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { screenSizeSliceType } from "../../Services/Types";

const initialState: screenSizeSliceType = {
  isSmallScreen: false,
  isMiddleScreen: false,
};

const screenSizeSlice = createSlice({
  name: "screeSizeSlice",
  initialState,
  reducers: {
    setScreenSmallSize(state, action: PayloadAction<boolean>) {
      state.isSmallScreen = action.payload;
    },
    setScreenMiddleSize(state, action: PayloadAction<boolean>) {
      state.isMiddleScreen = action.payload;
    },
  },
});

export const { setScreenSmallSize, setScreenMiddleSize } =
  screenSizeSlice.actions;
export default screenSizeSlice.reducer;
