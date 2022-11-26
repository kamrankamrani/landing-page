import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

interface widgetSliceType {
  lampIsOn: boolean;
  onScreenLampIsOn: boolean;
  onScreenFlowerClicked: boolean;
  isRain: boolean;
}

const initialState: widgetSliceType = {
  lampIsOn: false,
  onScreenLampIsOn: false,
  onScreenFlowerClicked: false,
  isRain: false,
};

const widgetSlice = createSlice({
  name: "widgetSlice",
  initialState,
  reducers: {
    setlampIsOn(state, action: PayloadAction<boolean>) {
      state.lampIsOn = action.payload;
    },
    setOnScreenLampIsOn(state, action: PayloadAction<boolean>) {
      state.onScreenLampIsOn = action.payload;
    },
    setOnScreenFlowerClicked(state, action: PayloadAction<boolean>) {
      state.onScreenFlowerClicked = action.payload;
    },
    setIsRain(state, action: PayloadAction<boolean>) {
      state.isRain = action.payload;
    },
  },
});

export default widgetSlice.reducer;
export const {
  setIsRain,
  setOnScreenFlowerClicked,
  setlampIsOn,
  setOnScreenLampIsOn,
} = widgetSlice.actions;
