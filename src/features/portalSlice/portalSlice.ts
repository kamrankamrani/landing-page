import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { portalSliceType } from "../../Services/Types";

const initialState: portalSliceType = {
  openMobileMenu: false,
  openImageModal: false,
};

const portalSlice = createSlice({
  name: "portalSlice",
  initialState,
  reducers: {
    setOpenMobileMenu(state, action: PayloadAction<boolean>) {
      state.openMobileMenu = action.payload;
    },
    setOpenImageModal(state, action: PayloadAction<boolean>) {
      state.openImageModal = action.payload;
    },
  },
});

export const { setOpenMobileMenu, setOpenImageModal } = portalSlice.actions;
export default portalSlice.reducer;
