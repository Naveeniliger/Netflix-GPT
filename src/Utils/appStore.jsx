import { configureStore } from "@reduxjs/toolkit";
import  userReducer  from "./userSlice"
import movieReducer from "./MovieSlice"
import gptReducer from "./GptSlice"

const appStore = configureStore ({
    reducer :{
        user: userReducer,
        movies : movieReducer,
        gpt : gptReducer,
        
    },
})

export default appStore