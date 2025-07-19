import React from 'react'
import { useSelector } from 'react-redux'

const GptCards = () => {

     const { movieNames, movieResults } = useSelector((store) => store.gpt)

  if (!movieNames || !movieResults) return null

  return (
    <div className="gpt-suggestions">
      {movieResults.map((result, index) => {
        const movieName = movieNames[index];
        
        // Skip empty name or failed API result
        if (!movieName || result.Response === "False") return null;

        return (
          <div key={index} className="movie-group">
            <h1>{movieName}</h1>
            <div className="movie-list">
              {result.Search?.map((movie, i) => (
                <div key={i} className="movie-card">
                  <img
                    src={movie.Poster !== "N/A" ? movie.Poster : "https://via.placeholder.com/150"}
                    alt={movie.Title}
                  />
                  <h4 className='gptmovietitle'>{movie.Title}</h4>
                  <p className='gptmovieyear'>Year:{movie.Year}</p>
                </div>
              ))}
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default GptCards