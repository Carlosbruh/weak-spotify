import { createSlice } from "@reduxjs/toolkit";

interface StateType {
  store: { tokenId?: string; item?: SpotifyApi.PlaylistObjectSimplified };
}

export const spotifySlice = createSlice({
  name: "spotifyredux",
  initialState: {
    tokenId: undefined,
    item: undefined,
  },
  reducers: {
    saveToken: (state, action) => {
      state.tokenId = action.payload;
    },
    saveItem: (state, action) => {
      state.item = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { saveToken, saveItem } = spotifySlice.actions;
export const selectTokenId = (state: StateType) => state.store.tokenId;

export const reducers = spotifySlice.reducer;
