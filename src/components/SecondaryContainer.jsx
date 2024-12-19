import React from "react";
import MovieList from "./MovieList";
import { useSelector } from "react-redux";

const SecondaryContainer = () => {
  const movies = useSelector((store) => store?.movies);
  if (!movies) return;
  return (
    movies && (
      <div className="bg-black text-white">
        <div className="-mt-60 relative z-20">
          <MovieList
            title={"Now Playing Movies"}
            movies={movies?.nowPlayingMovies}
          />
          <MovieList title={"Popular Movies"} movies={movies?.popularMovies} />
          <MovieList
            title={"Now Playing Movies"}
            movies={movies?.nowPlayingMovies}
          />
          <MovieList
            title={"Now Playing Movies"}
            movies={movies?.nowPlayingMovies}
          />
        </div>
      </div>
    )
  );
};

export default SecondaryContainer;
