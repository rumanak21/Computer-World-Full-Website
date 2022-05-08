// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth} from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBdsK-pvnlTTcFtfb75chvlydZsYMnrZDc",
    authDomain: "computer-world-3fb97.firebaseapp.com",
    projectId: "computer-world-3fb97",
    storageBucket: "computer-world-3fb97.appspot.com",
    messagingSenderId: "72992602106",
    appId: "1:72992602106:web:1486df431f60425cd8d643",
    measurementId: "G-JHC6J8NGSD"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
const auth = getAuth(app)

export default auth;