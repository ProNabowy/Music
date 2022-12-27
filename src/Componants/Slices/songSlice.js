const { createAsyncThunk, createSlice } = require("@reduxjs/toolkit");

export const getDataFromAPI = createAsyncThunk("song/songSlice", async () =>
{
    const response = await fetch("https://raw.githubusercontent.com/ProNabowy/music-app-img/main/songsApi.json");
    const data = response.json();
    return data;
});


const songReducer = createSlice({
    name: "songReducer",
    initialState: [],
    extraReducers: (builder) =>
    {
        builder.addCase(getDataFromAPI.fulfilled, (state, action) =>
        {
            return action.payload;
        });
    }
});


export default songReducer.reducer;