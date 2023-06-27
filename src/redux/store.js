import { configureStore } from "@reduxjs/toolkit";

import homeReducer from "./slices/homeSlice";
import singleProductReducer from "./slices/productSlice";
const store = configureStore({
  reducer: {
    homeStore: homeReducer,
    singleProduct: singleProductReducer,
  },
});

export default store;
