import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const GptMovieSuggestions = () => {
  const movies = useSelector(store=>store.movies);
 

  return (
    <div className="  p-4 m-4 bg-black text-white bg-opacity-90">
    <div>
      <MovieList title={"Horror"} movies ={movies.nowPlayingMovies} />
      <MovieList title={"Up Coming"} movies ={movies.upcomingMovies} /> 
       
      </div>
    
    </div>
  );
};
export default GptMovieSuggestions;