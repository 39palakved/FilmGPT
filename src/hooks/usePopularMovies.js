import { useDispatch } from "react-redux";
import { Api_OPTION } from "../utils/constant";
import { addPopularMovies} from "../utils/movieSlice";
import  { useEffect } from 'react'


const usePopularMovies = () => {
  // Fetch Data from TMDB API and update store
  const dispatch = useDispatch();

  

  const getPopularMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/popular?language=hi&region=IN&page=3",
      Api_OPTION
    );
    const json = await data.json();
    console.log(json)
    dispatch(addPopularMovies(json.results));
  };

  useEffect(() => {
     getPopularMovies();
  }, []);
};

export default usePopularMovies;