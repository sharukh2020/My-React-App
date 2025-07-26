// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBVRO065yF4P3vgzP5YDohfvkQ2Q8E6jvo",
  authDomain: "sign-up-and-sign-in-and-state.firebaseapp.com",
  projectId: "sign-up-and-sign-in-and-state",
  storageBucket: "sign-up-and-sign-in-and-state.firebasestorage.app",
  messagingSenderId: "540834471983",
  appId: "1:540834471983:web:f7294950ce090c612e66da"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);