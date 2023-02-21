import { createSlice } from "@reduxjs/toolkit";

export interface StateType {
  store: { tokenId?: string };
}

export const spotifySlice = createSlice({
  name: "spotifyredux",
  initialState: {
    tokenId: "0",
  },
  reducers: {
    saveToken: (state, action) => {
      state.tokenId = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { saveToken } = spotifySlice.actions;
export const selectTokenId = (state: StateType) => state.store.tokenId;

export const reducers = spotifySlice.reducer;
