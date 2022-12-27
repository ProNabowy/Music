import { configureStore } from "@reduxjs/toolkit";
import activeSong from "../Slices/active-song";
import songSlice from "../Slices/songSlice";

const store = configureStore({
    reducer: {
        songs: songSlice,
        currentSong: activeSong
    }
});

export default store;