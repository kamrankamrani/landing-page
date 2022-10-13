import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

interface widgetSliceType {
  mobileLampClick: boolean;
  // lampElement: HTMLElement | null;
  lampIsOn: boolean;
  onScreenLampIsOn: boolean;
  textMessageElemnt: string;
}

const initialState: widgetSliceType = {
  mobileLampClick: false,
  // lampElement: null,
  lampIsOn: false,
  textMessageElemnt: "",
  onScreenLampIsOn: false,
};

const widgetSlice = createSlice({
  name: "widgetSlice",
  initialState,
  reducers: {
    setMobileLampClick(state, action: PayloadAction<boolean>) {
      state.mobileLampClick = action.payload;
    },
    setlampIsOn(state, action: PayloadAction<boolean>) {
      state.lampIsOn = action.payload;
    },
    setTextMessageElement(state, action: PayloadAction<string>) {
      state.textMessageElemnt = action.payload;
    },
    // setLampElement(state, action: PayloadAction<HTMLElement | null>) {
    //   if (action.payload !== null) {
    //     state.lampElement = action.payload;
    //   }
    // },
    setOnScreenLampIsOn(state, action: PayloadAction<boolean>) {
      state.onScreenLampIsOn = action.payload;
    },
  },
});

export default widgetSlice.reducer;
export const {
  setMobileLampClick,
  setlampIsOn,
  setTextMessageElement,
  // setLampElement,
  setOnScreenLampIsOn,
} = widgetSlice.actions;
