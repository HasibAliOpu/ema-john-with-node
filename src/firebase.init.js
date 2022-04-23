// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDZwhaiacJWkjkqwggwsh2vX82uwbyv494",
  authDomain: "ema-john-91a03.firebaseapp.com",
  projectId: "ema-john-91a03",
  storageBucket: "ema-john-91a03.appspot.com",
  messagingSenderId: "74179840676",
  appId: "1:74179840676:web:6cec080ca2413ac984f431",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;
