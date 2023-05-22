import { configureStore } from '@reduxjs/toolkit';
import rocketsSlice from './slices/rocketsSlice';
import dragonsSlice from './slices/dragonsSlice';

const Store = configureStore({
  reducer: {
    rockets: rocketsSlice.reducer,
    dragonsobj: dragonsSlice.reducer,
  },
})

export default Store;