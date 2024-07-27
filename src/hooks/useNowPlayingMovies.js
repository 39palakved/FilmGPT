
import { useDispatch } from "react-redux";
import { Api_OPTION } from "../utils/constant";
import { addNowPlayingMovies } from "../utils/movieSlice";
import  { useEffect } from 'react'


const useNowPlayingMovies = () => {
  // Fetch Data from TMDB API and update store
  const dispatch = useDispatch();

  

  const getNowPlayingMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/now_playing?page=2",
      Api_OPTION
    );
    const json = await data.json();
    console.log(json)
    dispatch(addNowPlayingMovies(json.results));
  };

  useEffect(() => {
     getNowPlayingMovies();
  }, []);
};

export default useNowPlayingMovies;