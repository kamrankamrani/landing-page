import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { commentType } from "../../Services/Types";

interface commentSliceType {
  comments: commentType[];
}

const initialState: commentSliceType = {
  comments: [{ id: -1, text: "", date: "", shop: "" }],
};

const commentsSlice = createSlice({
  name: "commentsSlice",
  initialState,
  reducers: {
    setComments(state, action: PayloadAction<commentType[]>) {
      state.comments.length = 0; // for emty array
      action.payload.map((value) => {
        //we probably have more properties, so we can assign more in here
        // state.comments[index].text = value.text;
        // state.comments[index].id = value.id;
        // state.comments[index].date = value.date;
        state.comments.push(value);
      });
    },
  },
});

export const { setComments } = commentsSlice.actions;
export default commentsSlice.reducer;
