import { createSlice } from "@reduxjs/toolkit";


const GptSlice = createSlice({
    name : 'gpt' ,
    initialState : {
        Showgpt : false,
        movieNames : null,
        movieResults : null,
    },
    reducers:{
        ToggleGpt : (state) =>{
            state.Showgpt = !state.Showgpt
        },
        AddGpttmdbresults : (state , action) => {
            const {movieNames , movieResults} = action.payload
            state.movieNames = movieNames
            state.movieResults = movieResults
        }
    }
})

export default GptSlice.reducer
export const {ToggleGpt , AddGpttmdbresults} = GptSlice.actions