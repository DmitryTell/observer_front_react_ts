import { createSlice, PayloadAction } from '@reduxjs/toolkit';


const SERVER_KEY = 'server';

interface IRoomState {
  server: string;
}

const initialState: IRoomState = {
  server: localStorage.getItem(SERVER_KEY) as string || '',
};

export const roomSlice = createSlice({
  name: 'room',
  initialState,
  reducers: {
    setServerUrl(state, action: PayloadAction<{ url: string }>) {
      const { url } = action.payload;

      state.server = url;

      localStorage.setItem(SERVER_KEY, state.server);
    },
  },
});

export const {
  setServerUrl,
} = roomSlice.actions;
