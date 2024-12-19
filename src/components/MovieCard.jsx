import React from "react";
import { IMG_CDN_URL } from "../utils/constants";

const MovieCard = ({ posterPath }) => {
  return (
    <div className="w-36 md:w-48 pr-4">
      <img className="w-50" alt="poster" src={IMG_CDN_URL + posterPath} />
    </div>
  );
};

export default MovieCard;
