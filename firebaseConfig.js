// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBmB-VdQfMPxFYPiHn1UMZ5UOKtxHayLUE",
  authDomain: "nextgentransportservices.firebaseapp.com",
  projectId: "nextgentransportservices",
  storageBucket: "nextgentransportservices.firebasestorage.app",
  messagingSenderId: "957885905504",
  appId: "1:957885905504:web:ba0b679c84f00659986105",
  measurementId: "G-5DMD9EGYXH"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
const analytics = getAnalytics(app);


export default app;