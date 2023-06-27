import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  loading: "idle",
  error: "",
};
// export const fetchPushDate = createAsyncThunk(
//   "home/fetchPushData",
//   async (arg) => {
//     const { url, type } = arg;
//     return axios.get(url).then((res) => ({ ...res.data.data, type }));
//   }
// );
const URL = "https://leverapi.f4rd1n.ir/api/digikala";

export const fetchGetData = createAsyncThunk("home/fetchGetData", async () => {
  const response = await axios.get(URL);
  return response.data.results;
});
const homeSlice = createSlice({
  name: "homeState",
  initialState,
  reducers: {
    getData: (state, action) => {
      return { ...action.payload };
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchGetData.pending, (state) => {
      state.loading = "loading";
    });
    builder.addCase(fetchGetData.fulfilled, (state, action) => {
      state.loading = "fulfilled";
      Object.entries(action.payload).map(([key, value]) => {
        state[key] = value;
      });
    });
    builder.addCase(fetchGetData.rejected, (state, action) => {
      state.loading = "reject";
      state.error = action.err.message;
    });
  },
});

export default homeSlice.reducer;
export const { getData } = homeSlice.actions;
