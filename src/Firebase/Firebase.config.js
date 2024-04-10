// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAaIqTySI-j4rn6YHRMfYFW0mm_yAV2KVk",
  authDomain: "real-estate-assignment-9-6a9cd.firebaseapp.com",
  projectId: "real-estate-assignment-9-6a9cd",
  storageBucket: "real-estate-assignment-9-6a9cd.appspot.com",
  messagingSenderId: "55720106752",
  appId: "1:55720106752:web:0f005be4e3c296c2c8f1e5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);