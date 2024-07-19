// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC1mBujMVYzpRO6MWf2oGEq4lIIIHiDkgk",
  authDomain: "fyp-auth-a2e82.firebaseapp.com",
  projectId: "fyp-auth-a2e82",
  storageBucket: "fyp-auth-a2e82.appspot.com",
  messagingSenderId: "42036042719",
  appId: "1:42036042719:web:53395487f99065fe21c26a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth=getAuth();
export const db=getFirestore(app);
export default app;
