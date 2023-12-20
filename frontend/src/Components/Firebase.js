// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: "globaltweet-15ffb.firebaseapp.com",
  projectId: "globaltweet-15ffb",
  storageBucket: "globaltweet-15ffb.appspot.com",
  messagingSenderId: "78011645303",
  appId: "1:78011645303:web:cc324168c50cb8621f7572"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);