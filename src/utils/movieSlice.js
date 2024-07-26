import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
  name: "movies",
  initialState: {
    nowPlayingMovies :null,
  },
  reducers: {
    addNowPlayingMovies: (state, action) => {
      
      state.nowPlayingMovies = action.payload;
    },
    addTrailerVedio :(state,action)=>{
        state.trailerVedio =action.payload;
    },
    addPopularMovies:(state,action)=>{
        state.popularMovies = action.payload;
    },
    addTopRatedMovies:(state,action)=>{
        state.topratedMovies = action.payload;
    },
    addUpcomingMovies:(state,action)=>{
        state.upcomingMovies = action.payload;
    }
   
  },
});

export const {addNowPlayingMovies, addTrailerVedio,addPopularMovies,addTopRatedMovies,addUpcomingMovies} = movieSlice.actions

export default movieSlice.reducer;