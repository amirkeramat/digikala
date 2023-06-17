import {configureStore} from '@reduxjs/toolkit'

import homeReducer from './home/homeSlice'
import menuToggleReducer from './menu/MenuSlice'

const store = configureStore({
  reducer: {
    homeStore: homeReducer,
    menuToggle: menuToggleReducer,
  },
});

export default store