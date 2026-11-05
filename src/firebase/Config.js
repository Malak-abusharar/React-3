// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDfTn2aesqfTK8gFqHrzAK9NqJ8Aoi8zPc",
  authDomain: "react-3-5f4ab.firebaseapp.com",
  projectId: "react-3-5f4ab",
  storageBucket: "react-3-5f4ab.firebasestorage.app",
  messagingSenderId: "399669341833",
  appId: "1:399669341833:web:d0d1f83d649de51241a058"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);