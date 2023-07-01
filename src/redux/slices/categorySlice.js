import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { CATEGORY } from "../../api";
const initialState = {
  loading: "idle",
  products:[],
  pager:{},
  seo:{},
  error: null,
};

export const fetchCategoryProduct = createAsyncThunk(
  "categories/fetchCategoryProduct",
  async (arg) => {
    const { name, page } = arg;
    return await axios
      .get(`${CATEGORY}${name}/search?page=${page}`)
      .then((Response) => Response.data.results)
      .catch((err) => {
        return err.message;
      });
  }
);


const categoriesSlice = createSlice({
  name: "categories",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(fetchCategoryProduct.pending, (state) => {
      state.loading = "pending";
    });
    builder.addCase(fetchCategoryProduct.fulfilled, (state, action) => {
      state.loading = "fulfilled";
      state.products = action.payload.products
      state.pager = action.payload.pager
      state.seo = action.payload.seo
    });
    builder.addCase(fetchCategoryProduct.rejected, (state, action) => {
      (state.loading = "rejected"), (state.error = action.error);
    });
  },
});

export default categoriesSlice.reducer