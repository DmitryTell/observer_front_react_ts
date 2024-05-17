import { configureStore } from '@reduxjs/toolkit';

import { roomSlice } from '../slices';


export const store = configureStore({
  reducer: {
    room: roomSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
