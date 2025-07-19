import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { addMovieApi } from './MovieSlice';

const useMoviesApi = () => {
    const dispatch = useDispatch();

    const MovieAPI = async () => {

        const myHeaders = new Headers();
        myHeaders.append("x-apihub-key", "yG4ZJm6CDtu3TPlquucj4hbP6TlS2KWje6YZtoctQgybxVLl7K");
        myHeaders.append("x-apihub-host", "Movies-Verse.allthingsdev.co");
        myHeaders.append("x-apihub-endpoint", "4f700f4a-4bd2-4604-8d5b-7b5e4c976c65");

        const requestOptions = {
            method: "GET",
            headers: myHeaders,
            redirect: "follow"
        };

        fetch("https://Movies-Verse.proxy-production.allthingsdev.co/api/movies/upcoming-movies", requestOptions)
            .then((response) => response.json())
            .then((results) => {
                // console.log(results)
                dispatch(addMovieApi(results));  
            })
            .catch((error) => console.error("API Error:", error));  

        // const myHeaders = new Headers();
        // myHeaders.append("x-apihub-key", "yG4ZJm6CDtu3TPlquucj4hbP6TlS2KWje6YZtoctQgybxVLl7K");
        // myHeaders.append("x-apihub-host", "Movies-Verse.allthingsdev.co");
        // myHeaders.append("x-apihub-endpoint", "d3ee0b1f-e51c-46bc-99eb-c660726b0a1b");

        // const requestOptions = {
        //     method: "GET",
        //     headers: myHeaders,
        //     redirect: "follow"
        // };

        // fetch("https://Movies-Verse.proxy-production.allthingsdev.co/api/movies/top-250-movies", requestOptions)
        //     .then((response) => response.json())
        //       .then((results) => {
        //         console.log(results)
        //         dispatch(addMovieApi(results));  
        //     })
        //     .catch((error) => console.error(error));


    }

    useEffect(() => {
        MovieAPI();
    }, [])

}

export default useMoviesApi