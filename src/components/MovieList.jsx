import React from 'react';
import MovieCard from './MovieCard';

const MovieList = ({ title, movies = [] }) => {

  const hasMovies = Array.isArray(movies) && movies.length > 0;

  return (
    <div className='pt-6'>
        <h1 className='text-lg md:text-3xl py-4 text-white'>{title}</h1>
      <div className='flex overflow-x-scroll'>
        
    
        {hasMovies ? (
          <div className='flex'>
            {movies.map(movie=> <MovieCard key={movie.id} poster={movie?.poster_path} />)}
           
          </div>
        ) : (
          <p>No movies available</p>
        )}
      </div>
    </div>
  );
};

export default MovieList;
