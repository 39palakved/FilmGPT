import { useDispatch } from "react-redux";
import { Api_OPTION } from "../utils/constant";
import { addTopRatedMovies} from "../utils/movieSlice";
import  { useEffect } from 'react'


const useTopRatedMovies = () => {
  // Fetch Data from TMDB API and update store
  const dispatch = useDispatch();

  

  const getTopRatedMovies = async () => {
    const data = await fetch(
    'https://api.themoviedb.org/3/movie/top_rated?language=hi&region=IN&page=3',
      Api_OPTION
    );
    const json = await data.json();
    console.log(json)
    dispatch(addTopRatedMovies(json.results));
  };

  useEffect(() => {
     getTopRatedMovies();
  }, []);
};

export default useTopRatedMovies;