import React from "react";
import GPTSearchBar from "./GPTSearchBar";
import { BODY_BG_IMG_URL } from "../utils/constants";

const GPTSearch = () => {
  return (
    <>
      <div className="fixed -z-10">
        <img
          className="w-full object-cover"
          src={BODY_BG_IMG_URL}
          alt="logo"
        ></img>
      </div>
      <div className="">
        <GPTSearchBar />
      </div>
    </>
  );
};

export default GPTSearch;
