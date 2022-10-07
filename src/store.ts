import { configureStore } from "@reduxjs/toolkit";
import commentsSlice from "./features/commentsSlice/commentsSlice";
import screenSizeReducer from "./features/screenSizeSlice/screenSizeSlice";

export const store = configureStore({
  reducer: {
    screenSize: screenSizeReducer,
    commentsSlice: commentsSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
