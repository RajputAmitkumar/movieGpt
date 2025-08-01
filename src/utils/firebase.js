// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBtxdcCQHf0Msh2hTqFVwBnFVdebXFQifY",
  authDomain: "movie-based-gpt.firebaseapp.com",
  projectId: "movie-based-gpt",
  storageBucket: "movie-based-gpt.firebasestorage.app",
  messagingSenderId: "927418984624",
  appId: "1:927418984624:web:1ccf1704c4dd984dddf375",
  measurementId: "G-Q5G3J2C1GL"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();