// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB9Oz12pdRvD-8I9e1UY-nGtaotEzV_fyo",
  authDomain: "login-example-ef094.firebaseapp.com",
  projectId: "login-example-ef094",
  storageBucket: "login-example-ef094.firebasestorage.app",
  messagingSenderId: "885965777088",
  appId: "1:885965777088:web:ecac1f65bf206482352525"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);