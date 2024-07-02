// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getDatabase, ref, set } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBO6QPcAt4zh-rTuJCZePAjuYden4IR5Ck",
  authDomain: "easy-calculator-e08bc.firebaseapp.com",
  databaseURL: "https://easy-calculator-e08bc-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "easy-calculator-e08bc",
  storageBucket: "easy-calculator-e08bc.appspot.com",
  messagingSenderId: "20056416220",
  appId: "1:20056416220:web:9d75c07022b6523a48b919",
  measurementId: "G-LDM7SFVZTN"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getDatabase();
const reference = ref(db, 'history/' + history);