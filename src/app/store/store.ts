import { configureStore } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';

import tasksReducer from "./taskSlice"

export const store = configureStore({
  reducer: {
    tasks: tasksReducer,
  },
});

export const useStoreDispatch = () => useDispatch<typeof store.dispatch>()
export type RootState = ReturnType<typeof store.getState>;