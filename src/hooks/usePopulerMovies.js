import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { addPopularMovies } from "../utils/store/movieSlice";
import { useEffect } from "react";

const usePopulerMovies = () => {
  const dispatch = useDispatch();
  const getPopulerMoviesList = async() => {
    const res = await fetch(
      "https://api.themoviedb.org/3/movie/popular?page=1",
      API_OPTIONS
    );
    const data = await res?.json();
    dispatch(addPopularMovies(data?.results));
  };

  useEffect(() => {
    getPopulerMoviesList();
  }, []);
};

export default usePopulerMovies;
