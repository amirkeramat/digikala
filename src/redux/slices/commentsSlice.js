import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { PRODUCT_COMMENTS } from "../../api";
const initialState = {
  loading: "idle",
  comments: [],
  error: null,
};
export const fetchComments = createAsyncThunk(
  "comment/fetchComments",
  async (arg) => {
    const { id, page } = arg;
    return await axios
      .get(`${PRODUCT_COMMENTS}${id}/comments?page=${page}`)
      .then((Response) => Response.data.results)
      .catch((err) => {
        return err.message;
      });
  }
);

const commentsSlice = createSlice({
  name: "comments",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(fetchComments.pending, (state) => {
      state.loading = "pending";
    });
    builder.addCase(fetchComments.fulfilled, (state, action) => {
      state.loading = "fulfilled";
      state.comments = action.payload;
    });
    builder.addCase(fetchComments.rejected, (state, action) => {
      (state.loading = "rejected"), (state.error = action.error);
    });
  },
});

export default commentsSlice.reducer