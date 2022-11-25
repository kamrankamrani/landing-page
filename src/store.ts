import { configureStore } from "@reduxjs/toolkit";
import commentsSlice from "./features/commentsSlice/commentsSlice";
import portalSlice from "./features/portalSlice/portalSlice";
import screenSizeReducer from "./features/screenSizeSlice/screenSizeSlice";
import shopSlice from "./features/shopSlice/shopSlice";
import widgetSlice from "./features/widgetSlice/widgetSlice";

export const store = configureStore({
  reducer: {
    screenSize: screenSizeReducer,
    commentsSlice: commentsSlice,
    widgetSlice: widgetSlice,
    shopSlice: shopSlice,
    portalSlice: portalSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
