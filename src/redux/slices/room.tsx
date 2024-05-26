import { createSlice, PayloadAction } from '@reduxjs/toolkit';


const SERVER_KEY = 'server';
const ROOM_ID_KEY = 'room-id';
const HOST_ID_KEY = 'host-id';

interface IRoomState {
  server: string;
  roomId: number | null;
  hostId: number | null;
}

const initialState: IRoomState = {
  server: localStorage.getItem(SERVER_KEY) as string || '',
  roomId: +(localStorage.getItem(ROOM_ID_KEY) as string) || null,
  hostId: +(localStorage.getItem(HOST_ID_KEY) as string) || null,
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
    setRoomAndHostId(state, action: PayloadAction<{ roomId: number; hostId: number }>) {
      const { roomId, hostId } = action.payload;

      state.roomId = roomId;
      state.hostId = hostId;

      localStorage.setItem(ROOM_ID_KEY, `${state.roomId}`);
      localStorage.setItem(HOST_ID_KEY, `${state.hostId}`);
    },
  },
});

export const {
  setServerUrl,
  setRoomAndHostId,
} = roomSlice.actions;
