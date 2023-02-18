import { createSlice } from "@reduxjs/toolkit";

export const spotifySlice = createSlice({
  name: "spotifyredux",
  initialState: {
    tokenId: "0",
  },
  reducers: {
    saveToken: (state) => {
      state.tokenId = "idk";
    },
  },
});

// Action creators are generated for each case reducer function
export const { saveToken } = spotifySlice.actions;
export const selectTokenId = (state: any) => state.store.tokenId;

export const reducers = spotifySlice.reducer;
