import { configureStore } from "@reduxjs/toolkit";

import homeState from "./slices/homeSlice";
import singleProductReducer from "./slices/productSlice";
import commentState from "./slices/commentsSlice";
import categoriesState from "./slices/categorySlice";
import searchReducer from "./slices/searchSlice";
const store = configureStore({
  reducer: {
    homeStore: homeState,
    singleProduct: singleProductReducer,
    comments: commentState,
    categoriesStore: categoriesState,
    searchStore: searchReducer,
  },
  // devTools: false,
});

export default store;
