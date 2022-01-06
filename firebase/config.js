// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAFniye_AXKGHpOBYty5b92HndX-ApV4Xk",
  authDomain: "personal-portfolio-cd262.firebaseapp.com",
  projectId: "personal-portfolio-cd262",
  storageBucket: "personal-portfolio-cd262.appspot.com",
  messagingSenderId: "116686792688",
  appId: "1:116686792688:web:967fbb47d61092d9f61f35",
  measurementId: "G-5MHLW7WE94"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
analytics.initializeApp();