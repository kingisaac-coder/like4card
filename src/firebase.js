import Firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCKhGGlYdL-6IIsoQLUYugogqjpjkguaJU",
  authDomain: "like4card-52f3c.firebaseapp.com",
  projectId: "like4card-52f3c",
  storageBucket: "like4card-52f3c.appspot.com",
  messagingSenderId: "340194750686",
  appId: "1:340194750686:web:d2b3cba155770dc29a924f",
  measurementId: "G-YT4QMTCS38",
};

const firebase = Firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();

export { firebase, db };
