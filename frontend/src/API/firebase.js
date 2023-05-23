// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCuVcHE0jFB19Xv0uGEsqgzUwIGPs_NlJc",
  authDomain: "globifier-8aa4e.firebaseapp.com",
  projectId: "globifier-8aa4e",
  storageBucket: "globifier-8aa4e.appspot.com",
  messagingSenderId: "1087036580574",
  appId: "1:1087036580574:web:467d821ee21b3d2301184f",
  measurementId: "G-R98269Y5S0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);