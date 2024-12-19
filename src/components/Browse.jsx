import React from "react";
import Header from "./Header";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import usePopulerMovies from "../hooks/usePopulerMovies";
import GPTSearch from "./GPTSearch";
import { useSelector } from "react-redux";

const Browse = () => {
  const gptSearchInfo = useSelector((store) => store.gpt);
  const { showGptSearch } = gptSearchInfo;
  useNowPlayingMovies();
  usePopulerMovies();
  return (
    <div>
      <Header />
      {!showGptSearch ? (
        <GPTSearch />
      ) : (
        <>
          <MainContainer />
          <SecondaryContainer />
        </>
      )}
    </div>
  );
};

export default Browse;
