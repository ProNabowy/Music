import { createSlice } from "@reduxjs/toolkit";

const activeSong = createSlice({
    name: "activeSong",
    initialState: {
        "id": 1,
        "songName": "Bad Guy",
        "songDescrption": "Listen to 'bad guy' from the debut album 'WHEN WE ALL FALL ASLEEP, WHERE DO WE GO?', out now",
        "singer": "Billie Eilish",
        "sm-img": "https://raw.githubusercontent.com/ProNabowy/music-app-img/main/bille-eilish-removebg-preview.webp",
        "poster": "https://raw.githubusercontent.com/ProNabowy/music-app-img/main/bille-eilish-removebg-preview.webp",
        "url": "https://github.com/ProNabowy/music-app-img/blob/main/Bad%20Guy.mp3?raw=true",
        "bg-poster": "https://github.com/ProNabowy/music-app-img/blob/main/bad-guy-bg-poster.webp?raw=true"
    },
    reducers: {
        getCurrentSong: (state, action) =>
        {
            return action.payload;
        }
    }
});


export default activeSong.reducer;
export const { getCurrentSong } = activeSong.actions;