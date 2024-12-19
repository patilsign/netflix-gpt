import { onAuthStateChanged, signOut } from "firebase/auth";
import React, { useEffect } from "react";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../utils/store/userSlice";
import { LOGO_URL, SUPPORTED_LANGUAGE } from "../utils/constants";
import { toggleGptSearchView } from "../utils/store/gptSlice";
import { changeLanguage } from "../utils/store/configSlice";

const Header = () => {
  const user = useSelector((store) => store.user);
  const gptSearchInfo = useSelector((store) => store.gpt.showGptSearch);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSignout = () => {
    signOut(auth)
      .then(() => {
        dispatch(removeUser());
      })
      .catch((error) => {
        // An error happened.
      });
  };

  const handleGptSearch = () => {
    dispatch(toggleGptSearchView());
  };

  const selectLanguage = (e) => {
    dispatch(changeLanguage(e.target.value));
  };

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName, photoURL } = user;
        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
            photoURL: photoURL,
          })
        );
        navigate("/browse");
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });
  }, []);
  return (
    <div className="fixed w-screen px-8 py-2 bg-gradient-to-r from-black z-10 flex flex-col md:flex-row justify-between">
      <img className="w-44 mx-auto md:mx-0" src={LOGO_URL} alt="logo" />
      {user && (
        <div className="flex">
          {!gptSearchInfo && (
            <select
              className="bg-gray-400 text-lg font-bold px-4 m-2 rounded-lg"
              onChange={selectLanguage}
            >
              {SUPPORTED_LANGUAGE.map((lang,index) => (
                <option key={index} value={lang.identifier}>{lang.name}</option>
              ))}
            </select>
          )}
          <button
            className="bg-purple-400 text-lg font-bold px-4 m-2 rounded-lg"
            onClick={handleGptSearch}
          >
            {gptSearchInfo ? "GPT Search" : "Home Page"}
          </button>
          <img
            className="w-12 h-12 m-3 "
            alt="usericon"
            src={user?.photoURL}
          ></img>
          <button
            className="text-xl bg-red-500 font-bold px-4 m-2 rounded-lg"
            onClick={handleSignout}
          >
            Signout
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
