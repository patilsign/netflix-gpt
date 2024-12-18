import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
  name: "movies",
  initialState: {
    nowPlayingMovies: null,
  },
  reducers: {
    addNowPlayingMovies: (state, action) => {
      state.nowPlayingMovies = action.payload;
    },
    removeMovies: (state, action) => {
      return null;
    },
  },
});

export const { addNowPlayingMovies, removeMovies } = movieSlice.actions;
export default movieSlice.reducer;
