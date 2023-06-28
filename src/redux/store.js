import { configureStore } from "@reduxjs/toolkit";

import homeState from "./slices/homeSlice";
import singleProductReducer from "./slices/productSlice";
import commentState from "./slices/commentsSlice";
const store = configureStore({
  reducer: {
    homeStore: homeState,
    singleProduct: singleProductReducer,
    comments: commentState,
  },
});

export default store;
