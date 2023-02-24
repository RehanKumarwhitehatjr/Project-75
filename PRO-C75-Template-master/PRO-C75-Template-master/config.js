import firebase from "firebase";
require("@firebase/firestore");

const firebaseConfig = {
  apiKey: "AIzaSyCoLKt9hrb4mHRkcQXhnpyRGRnpwh3kqv8",
  authDomain: "e-ride-84510.firebaseapp.com",
  projectId: "e-ride-84510",
  storageBucket: "e-ride-84510.appspot.com",
  messagingSenderId: "318467932819",
  appId: "1:318467932819:web:524860bd8ba782a0ae8366"
};

firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
