// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAAcvbR3in6XgpbBd-DurSbRHPbaGf027o",
  authDomain: "business-listing-aaabe.firebaseapp.com",
  projectId: "business-listing-aaabe",
  storageBucket: "business-listing-aaabe.appspot.com",
  messagingSenderId: "108997144391",
  appId: "1:108997144391:web:9c19b5cbbb80e5f71e6662",
  measurementId: "G-634W9GJZVC",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
// const analytics = getAnalytics(app);
