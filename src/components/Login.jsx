import React, { useState } from "react";
import Header from "./Header";

const Login = () => {
  const [isLoginForm, setIsLoginForm] = useState(true);
  const handleSignIn = () => {
    setIsLoginForm(!isLoginForm);
  };
  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          className="w-full object-cover"
          src="https://assets.nflxext.com/ffe/siteui/vlv3/729ce5c2-d831-436a-8c9d-f38fea0b99b3/web/IN-en-20241209-TRIFECTA-perspective_4aef76eb-7d5b-4be0-93c0-5f67320fd878_large.jpg"
          alt="logo"
        ></img>
      </div>
      <form className="w-full md:w-3/12 absolute p-12 bg-black my-36 mx-auto right-0 left-0 rounded-lg bg-opacity-80 text-white">
        <h1 className="p-4 my-4 w-full font-bold text-2xl text-center">
          {isLoginForm ? "Sign In" : "Sign Up"}
        </h1>
        {!isLoginForm && <input
          className="p-4 my-4 w-full"
          type="text"
          placeholder="Full Name"
        />}
        <input
          className="p-4 my-4 w-full"
          type="text"
          placeholder="Enter Email"
        />
        <input className="p-4 my-4 w-full" type="text" placeholder="Password" />
        <button className="p-4 my-4 w-full bg-red-700">
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
