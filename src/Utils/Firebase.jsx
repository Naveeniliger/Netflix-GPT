// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBpaZlnd2toTBn_4yJf_H0_3JTv3jH9JT8",
  authDomain: "netflix-gpt-fab96.firebaseapp.com",
  projectId: "netflix-gpt-fab96",
  storageBucket: "netflix-gpt-fab96.firebasestorage.app",
  messagingSenderId: "883030540737",
  appId: "1:883030540737:web:e95d2ca71d13afa860af40",
  measurementId: "G-PNGQND9W86"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();  