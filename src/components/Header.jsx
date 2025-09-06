import React, { useEffect } from "react";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { onAuthStateChanged } from "firebase/auth";
import { addUser, removeUser } from "../utils/userSlice";

const Header = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const user = useSelector((store) => store.user)

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName, photoURL } = user;
        console.log("authauthauth", auth);
        console.log("useruseruseruser", user);
        dispatch(
          addUser({
            isEmailVerified: user.emailVerified,
            email: email,
            displayName: displayName,
            photoURL: photoURL
          })
        );
        // ...
        navigate('/browse')
      } else {
        // User is signed out
        // ...
        dispatch(removeUser());
        navigate('/')
      }
    });
  }, []);

  return (
    <>
      <div className="">
        <img
          className="absolute w-44 z-50"
          src="https://help.nflxext.com/helpcenter/OneTrust/oneTrust_production/consent/87b6a5c0-0104-4e96-a291-092c11350111/01938dc4-59b3-7bbc-b635-c4131030e85f/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
          alt="logo"
        />
      </div>
      <div>{user?.displayName}</div>
    </>
  );
};

export default Header;
