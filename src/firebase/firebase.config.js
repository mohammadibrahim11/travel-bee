// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCFczqJ2iCtIjY9MVB4mKsHrslh0_usY_k",
  authDomain: "travel-bee-ab137.firebaseapp.com",
  projectId: "travel-bee-ab137",
  storageBucket: "travel-bee-ab137.appspot.com",
  messagingSenderId: "924317878375",
  appId: "1:924317878375:web:8f2210cf8a5868b761ecc2",
  measurementId: "G-L35CCY2SBX"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export default app