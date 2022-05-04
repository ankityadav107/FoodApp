import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBHh-uXuNCfNOkumfMTLD-bQ2mfY_pthWU",
  authDomain: "dejan-77595.firebaseapp.com",
  databaseURL: "https://dejan-77595.firebaseio.com",
  projectId: "dejan-77595",
  storageBucket: "dejan-77595.appspot.com",
  messagingSenderId: "14754822114",
  appId: "1:14754822114:web:c32776925688c6bb1f2bbb",
  measurementId: "G-6BXNWKDK5M",
};

!firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app();

export default firebase;
