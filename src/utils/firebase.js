// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDFKIROLnkclgLOUS_d16q7o5HS2TBLB2E",
  authDomain: "netflixgpt-108.firebaseapp.com",
  projectId: "netflixgpt-108",
  storageBucket: "netflixgpt-108.firebasestorage.app",
  messagingSenderId: "311344913839",
  appId: "1:311344913839:web:2dbbd88c062a2a816c635a",
  measurementId: "G-GPPKTXLEVL"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);