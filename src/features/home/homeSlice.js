import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  loading: false,
  error: "",
  incredible: {},
  bestSelling: {},
  popularBrands: {},
  categories: {},
  recommendationSubCategories: [],
  banners: [],
  //   mobile: {},
  //   laptop: {},
};

export const fetchGetData = createAsyncThunk("home/fetchGetData", (url) => {
  return axios.get(url).then((Response) => Response.data);
});

const homeSlice = createSlice({
  name: "getData",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(fetchGetData.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchGetData.fulfilled, (state, action) => {
      state.loading = "false";
      state.incredible = action.payload.results.incredible;
      state.bestSelling = action.payload.results.bestSelling;
      state.recommendationSubCategories =
        action.payload.results.recommendationSubCategories;
      state.banners = action.payload.results.banners;
      state.categories = action.payload.results.categories;
      //   state.popularBrands = action.payload.results.popularBrands;
      //   state.mobile = action.payload.results.mobile;
      //   state.laptop = action.payload.results.laptop;
    });
  },
});

export default homeSlice.reducer;
