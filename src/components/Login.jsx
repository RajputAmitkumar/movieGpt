import React, { useState } from "react";
import Header from "./Header";

const Login = () => {
  const handleSubmit = () => {
    alert("succesfully submitted");
  };
  const [isSignIn, setIsSignIn] = useState(true)
  const showSignup = () => {
    setIsSignIn(!isSignIn)
  }

  return (
    <>
      <div>
        <Header />
        <form
          className="absolute bg-black text-white w-1/3 h-1/2 mx-auto right-0 left-0 my-auto top-0 bottom-0 text-center bg-opacity-70"
          action="submit"
        >
          <h1 className="text-3xl bold m-3">{isSignIn ? "Sign in": "Sign Up"} </h1>
          {!isSignIn && <div className="h-1/6 my-4">
            {/* <label htmlFor="password">Password</label> */}
            <input
              className="w-4/5 px-2 h-full bg-black bg-opacity-0 text-white border rounded"
              type="text"
              placeholder="Enter Name"
              id="name"
            />
          </div> }
          <div className="h-1/6 my-4">
            {/* <label htmlFor="emailId">Email Address</label> */}
            <input
              className="w-4/5 h-full px-2 bg-black bg-opacity-0 text-white border rounded"
              type="text"
              placeholder="Email Address"
              id="emailId"
            />
          </div>

          <div className="h-1/6 my-4">
            {/* <label htmlFor="password">Password</label> */}
            <input
              className="w-4/5 px-2 h-full bg-black bg-opacity-0 text-white border rounded"
              type="password"
              placeholder="Enter Password"
              id="password"
            />
          </div>
          <button className="w-4/5 h-1/6 bg-red-600">{isSignIn ? "Sign In" : "Sign Up"}</button>
          
          <p className="no-underline hover:underline hover:cursor-pointer" onClick={showSignup}>{isSignIn ? "New to Netflix? Sign Up" : "Already registered !!! Click to sign in"}</p>
        </form>
        <div className="">
          <img
            src="https://assets.nflxext.com/ffe/siteui/vlv3/75b0ed49-75ab-4a63-bd45-37bc2c95cb73/web/IN-en-20250623-TRIFECTA-perspective_ae5833b7-6ce5-4e88-853e-014f38c506f1_medium.jpg"
            alt="bg image"
          />
        </div>
      </div>
    </>
  );
};

export default Login;
