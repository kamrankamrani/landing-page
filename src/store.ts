import { configureStore } from "@reduxjs/toolkit";
import commentsSlice from "./features/commentsSlice/commentsSlice";
import screenSizeReducer from "./features/screenSizeSlice/screenSizeSlice";
import storeSlice from "./features/storeSlice/storeSlice";
import widgetSlice from "./features/widgetSlice/widgetSlice";

export const store = configureStore({
  reducer: {
    screenSize: screenSizeReducer,
    commentsSlice: commentsSlice,
    widgetSlice: widgetSlice,
    storeSlice: storeSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
