import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { addTrailerVideo } from "../utils/store/movieSlice";
import { useEffect } from "react";

const useMovieTrailer = (movieId) => {
  const dispatch = useDispatch();
  const fetchMovieTrailer = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/" +
        movieId +
        "/videos?language=en-US",
      API_OPTIONS
    );
    const json = await data.json();
    const filterData = json.results.filter((video) => video.type === "Trailer");
    const trailerVideo = filterData[0] ? filterData[0] : json.results[0];
    dispatch(addTrailerVideo(trailerVideo));
  };

  useEffect(() => {
    fetchMovieTrailer();
  }, []);
};

export default useMovieTrailer;
