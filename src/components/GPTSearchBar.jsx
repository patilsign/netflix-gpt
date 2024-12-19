import React from "react";
import { useSelector } from "react-redux";
import lang from "../utils/languageConstants";

const GPTSearchBar = () => {
  const langKey = useSelector((store) => store.config.lang);
  const handleSearch = () => {};
  return (
    <div className="py-[10%] flex justify-center">
      <form
        className="w-1/2 bg-black grid grid-cols-12 m-4 p-4"
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          className="p-2 m-2 col-span-9"
          type="text"
          placeholder={lang[langKey].gptSearchPlaceHolder}
        />
        <button
          className="p-2 m-2 col-span-3 bg-red-500 font-bold rounded-md"
          onClick={handleSearch}
        >
          {lang[langKey].search}
        </button>
      </form>
    </div>
  );
};

export default GPTSearchBar;
