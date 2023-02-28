import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBDXBoTqrM4SChRvZQ_NgBuCuRBR-6T2gI",
  authDomain: "ecommerce-6c881.firebaseapp.com",
  projectId: "ecommerce-6c881",
  storageBucket: "ecommerce-6c881.appspot.com",
  messagingSenderId: "55032613386",
  appId: "1:55032613386:web:7f39e37d043cb6e429edf3",
  measurementId: "G-4FVCKM5VJR",
};

// Use this to initialize the firebase App
const firebaseApp = firebase.initializeApp(firebaseConfig);

// Use these for db & auth
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth, db };
