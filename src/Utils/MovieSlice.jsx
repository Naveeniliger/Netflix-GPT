import { createSlice } from "@reduxjs/toolkit";

  

  const MovieSlice = createSlice({
    name : 'movies',
    initialState : {
        Moviesdata : null
    },
    reducers : {
        addMovieApi : (state , action ) => {
            state.Moviesdata = action.payload
        }
    }
  })

  export default MovieSlice.reducer
  export const { addMovieApi } = MovieSlice.actions