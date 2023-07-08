import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import {SINGLE_PRODUCT} from "../../api/index";
import { data } from "autoprefixer";
const initialState = {
    loading:'idle',
    error:null,
    data:[]
}
export const getProductInfo = createAsyncThunk('product/getProductInfo',async (arg)=>{
    const {id} = arg
    return await axios.get(`${SINGLE_PRODUCT}${id}`).then(res=>res.data.results)
})

const productSlice = createSlice({
  name: "productState",
  initialState,
  reducers: {
    getData: (state, action) => {
      return { ...action.payload };
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getProductInfo.pending, (state) => {
      state.loading = "loading";
    });
    builder.addCase(getProductInfo.fulfilled, (state, action) => {
      state.loading = "fulfilled";
      // Object.entries(action.payload).map(([key, value]) => {
      //   state[key] = value;
      // });
      if(action.payload){
        state.data = action.payload
      }else{
        state.data=[]
      }
      
    });
    builder.addCase(getProductInfo.rejected, (state, action) => {
      state.loading = "reject";
      state.error = action.err;
    });
  },
});

export default productSlice.reducer