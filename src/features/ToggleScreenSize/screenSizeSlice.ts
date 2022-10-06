import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

interface screenSizeSliceType {
  isSmallScreen: boolean;
}

const initialState: screenSizeSliceType = {
  isSmallScreen: false,
};

const screenSizeSlice = createSlice({
  name: "screeSizeSlice",
  initialState,
  reducers: {
    setScreenSmallSize(state, action: PayloadAction<boolean>) {
      state.isSmallScreen = action.payload;
    },
  },
});

export const { setScreenSmallSize } = screenSizeSlice.actions;
export default screenSizeSlice.reducer;
