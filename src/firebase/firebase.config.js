// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDHbkeiajHnxD12PgbeLNQQ9y87sg1THow",
  authDomain: "travel-bee-57b4d.firebaseapp.com",
  projectId: "travel-bee-57b4d",
  storageBucket: "travel-bee-57b4d.appspot.com",
  messagingSenderId: "331980106369",
  appId: "1:331980106369:web:dff43d3f5233b7b2febb80",
  measurementId: "G-H4RE576YXL"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export default app