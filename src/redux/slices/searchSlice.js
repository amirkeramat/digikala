import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { SEARCH_PRODUCT } from "../../api/index";

const initialState = {
  loading: "",
  error: "",
  data: {},
};
export const searchData = createAsyncThunk("search/searchData", async (arg) => {
  const { name, page } = arg;
  return await axios
    .get(`${SEARCH_PRODUCT}q=${name}&page=${page}`)
    .then((Response) => Response.data.results)
    .catch((error) => error.message);
});

const searchSlice = createSlice({
  name: "search",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(searchData.pending, (state) => {
      state.loading = "pending";
    });
    builder.addCase(searchData.fulfilled, (state, action) => {
      (state.loading = "fulfilled"), (state.data = action.payload);
    });
    builder.addCase(searchData.rejected, (state, action) => {
      (state.loading = "rejected"), (state.error = action.payload.error);
    });
  },
});

export default searchSlice.reducer;
