// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD9ILXGDRCiN2i4imkOC_idOvbIv26MRB0",
  authDomain: "tndemo-123.firebaseapp.com",
  projectId: "tndemo-123",
  storageBucket: "tndemo-123.firebasestorage.app",
  messagingSenderId: "1077891220132",
  appId: "1:1077891220132:web:f4f1902cbe7ba9cd46dc31",
  measurementId: "G-HK9MN35T0L"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);