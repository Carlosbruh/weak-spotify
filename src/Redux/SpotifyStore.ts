import { configureStore } from "@reduxjs/toolkit";
import { reducers } from "./SpotifyRedux";
export const store = configureStore({ reducer: { store: reducers } });
