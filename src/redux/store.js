import {configureStore} from '@reduxjs/toolkit'

import homeReducer from './slices/homeSlice'

const store = configureStore({
  reducer: {
    homeStore: homeReducer,
  },
});

export default store