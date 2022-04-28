// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBsybWlCJWIqGXU_sWrETryCRmP-pn4VEk",
  authDomain: "spicy-velvet.firebaseapp.com",
  projectId: "spicy-velvet",
  storageBucket: "spicy-velvet.appspot.com",
  messagingSenderId: "125966549218",
  appId: "1:125966549218:web:7e7cea634e58d16699debb",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
