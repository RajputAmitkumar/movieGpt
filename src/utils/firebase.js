// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCKo_SQmuk8NycWBlf032qj1P7niZ73KaM",
  authDomain: "netflix-gpt-b91c3.firebaseapp.com",
  projectId: "netflix-gpt-b91c3",
  storageBucket: "netflix-gpt-b91c3.firebasestorage.app",
  messagingSenderId: "797610778800",
  appId: "1:797610778800:web:bdd9a97bfc9888af011b75",
  measurementId: "G-1VLPKG4CWC"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);