import { useDispatch } from "react-redux";
import { Api_OPTION } from "../utils/constant";
import { addUpcomingMovies} from "../utils/movieSlice";
import  { useEffect } from 'react'


const useUpcomingMovies = () => {
  // Fetch Data from TMDB API and update store
  const dispatch = useDispatch();

  

  const getUpcomingMovies = async () => {
    const data = await fetch(
    'https://api.themoviedb.org/3/movie/upcoming?language=hi-in&page=1',
      Api_OPTION
    );
    const json = await data.json();
    console.log(json)
    dispatch(addUpcomingMovies(json.results));
  };

  useEffect(() => {
     getUpcomingMovies();
  }, []);
};

export default useUpcomingMovies;