import React, { useRef, useState } from 'react'
import { VITE_GEMINI_API_KEY } from "./apiKey"
import { useDispatch } from 'react-redux'
import { AddGpttmdbresults } from '../Utils/GptSlice'



const GptSearchBar = () => {



    const SearchText = useRef(null)
    const dispatch = useDispatch()


    const moviesdataomdb = async(movie) => {
        const fetchdata = await fetch('http://www.omdbapi.com/?s='+movie+'&apikey=1c2b33d8')
        const response = await fetchdata.json()
        return response
        // console.log(results)
    }
    moviesdataomdb()    

    const HandleGptSearch = async () => {

        const prompt = SearchText.current.value
        const response = await fetch(
            `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent`,
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    'X-goog-api-key': VITE_GEMINI_API_KEY
                },
                body: JSON.stringify({
                    contents: [
                        {
                            parts: [
                                {
                                    text: `Give me a maximum of 8 results related to movies/movie name that is given in prompt . Each result should include 'only' movie name (i don't need any word , without any explanation or extra text. Just return the names),                                        
                                               (If the movie have multiple parts then return all movie names) and the movie related query/movie name is -`+ prompt
                                }
                            ]
                        }
                    ]
                })
            }
        );

        const gptdata = await response.json();
        // console.log("Gemini says:", gptdata?.candidates[0]?.content?.parts9[0]?.text);
        const gptmovies = gptdata?.candidates[0]?.content?.parts[0]?.text.split("\n").map(line => line.replace(/^\d+\.?\s*|\*/g, "").trim())
        console.log(gptmovies)
        
        const promisearray = gptmovies.map((movie)=> moviesdataomdb(movie))
        // console.log(promisearray)

        const promiseresults = await Promise.all(promisearray)
        console.log(promiseresults)

        dispatch(AddGpttmdbresults({ movieNames : gptmovies , movieResults : promiseresults }))
    };  





    return (
        <div>
            <div className='gptimg'>
                <img src="https://assets.nflxext.com/ffe/siteui/vlv3/05e91faa-6f6d-4325-934e-5418dcc2567b/web/IN-en-20250630-TRIFECTA-perspective_159086b1-425f-435b-bcd5-1ed8039cdef9_small.jpg" alt="" />
            </div>
            <div className='gptsaerchbar'>

                <form className='gptform' action="" onSubmit={(e) => e.preventDefault()}>
                    <input ref={SearchText} className='gptinput' type="text" placeholder='Search Movie Suggetions Here' />
                    <button className='gptbtn' onClick={HandleGptSearch} >Search</button>
                </form>
            </div>
        </div>
    )

}


export default GptSearchBar

