// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC83paaubXfALa9t7N65BtbrByAr004QE4",
  authDomain: "coffee-store-project.firebaseapp.com",
  projectId: "coffee-store-project",
  storageBucket: "coffee-store-project.appspot.com",
  messagingSenderId: "502782056720",
  appId: "1:502782056720:web:836255d84d9345e26d2d95"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;