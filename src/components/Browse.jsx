import React from "react";
import Header from "./Header";
import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const Browse = () => {
  const navigate = useNavigate();
  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        console.log("signed out succesful");
        // Sign-out successful.
        navigate("/");
      })
      .catch((error) => {
        // An error happened.
        console.log("error in sign out");
      });
  };
  const user = useSelector(store => store.user)
  console.log("i am subscribed from the  store",user)
  // console.log("i am coming from browse page")
  return (
    <div className="flex justify-between h-16 bg-black bg-opacity-20">
      <Header />
      <div className="flex">
        <img
          src="https://static.thenounproject.com/png/1515478-200.png"
          alt="menu icon"
        />
        <div>{user?.displayName}</div>
        {/* <div>{auth?.currentUser?.displayName}</div> */}
        <button className="border-x-2" onClick={handleSignOut}>
          Sign out
        </button>
      </div>
    </div>
  );
};

export default Browse;
