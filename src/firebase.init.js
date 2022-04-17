// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBi4HNwnzWj0SmkBlX3LXu1Gykbgfjx_cw",
  authDomain: "get-me-healthy.firebaseapp.com",
  projectId: "get-me-healthy",
  storageBucket: "get-me-healthy.appspot.com",
  messagingSenderId: "386275876713",
  appId: "1:386275876713:web:63dcb69175c4cda2f227f8",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)

export default auth;
