// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAR7A3nTRKr-1U90bc2AO3IfybEX02Qrys",
  authDomain: "appcheck-test-f572e.firebaseapp.com",
  projectId: "appcheck-test-f572e",
  storageBucket: "appcheck-test-f572e.firebasestorage.app",
  messagingSenderId: "941402830108",
  appId: "1:941402830108:web:a3193d31714d00e65736d9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);