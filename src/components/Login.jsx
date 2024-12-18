import React, { useRef, useState } from "react";
import Header from "./Header";
import { checkFieldValidation } from "../utils/validate";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../utils/firebase";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addUser } from "../utils/store/userSlice";
import { AVTAR_URL, BODY_BG_IMG_URL } from "../utils/constants";

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);

  const [errorMessage, setErrorMessage] = useState();
  const [isLoginForm, setIsLoginForm] = useState(true);

  const handleSignIn = () => {
    setIsLoginForm(!isLoginForm);
  };

  const handleSignBtn = () => {
    const message = checkFieldValidation(
      email.current.value,
      password.current.value
    );
    setErrorMessage(message);
    
    if (message) return;

    if (!isLoginForm) {
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          updateProfile(auth.currentUser, {
            displayName: name.current.value,
            photoURL: AVTAR_URL,
          })
            .then(() => {
              const { displayName, email, uid, photoURL } = auth.currentUser;
              dispatch(
                addUser({
                  displayName: displayName,
                  email: email,
                  uid: uid,
                  photoURL: photoURL,
                })
              );
              navigate("/browse");
            })
            .catch((error) => {
              setErrorMessage(error.message);
            });
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + ":" + errorMessage);
        });
    } else {
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          navigate("/browse");
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + ":" + errorMessage);
        });
    }
  };

  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          className="w-full object-cover"
          src={BODY_BG_IMG_URL}
          alt="logo"
        ></img>
      </div>
      <form
        onSubmit={(e) => e.preventDefault()}
        className="w-full md:w-3/12 absolute p-12 bg-black my-36 mx-auto right-0 left-0 rounded-lg bg-opacity-80 text-white"
      >
        <h1 className="p-4 my-4 w-full font-bold text-2xl text-center">
          {isLoginForm ? "Sign In" : "Sign Up"}
        </h1>
        {!isLoginForm && (
          <input
            ref={name}
            className="p-4 my-4 w-full text-black"
            type="text"
            placeholder="Full Name"
          />
        )}
        <input
          ref={email}
          className="p-4 my-4 w-full  text-black"
          type="text"
          placeholder="Enter Email"
        />
        <input
          ref={password}
          className="p-4 my-4 w-full  text-black"
          type="text"
          placeholder="Password"
        />
        <p className="py-4 text-red-500 font-bold">{errorMessage}</p>
        <button className="p-4 my-4 w-full bg-red-700" onClick={handleSignBtn}>
          {isLoginForm ? "Sign In" : "Sign Up"}
        </button>
        <p className="p-4 my-6 w-full cursor-pointer" onClick={handleSignIn}>
          {isLoginForm
            ? "New to Netflix? Sign up now."
            : "Already Registered, Please Login"}
        </p>
      </form>
    </div>
  );
};

export default Login;
