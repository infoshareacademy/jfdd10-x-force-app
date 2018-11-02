import firebase from "firebase";

const config = {
  apiKey: "AIzaSyBSLp0xy3XGTH8QrerqmopQ1DYxuzuSgio",
  authDomain: "x-force-app.firebaseapp.com",
  databaseURL: "https://x-force-app.firebaseio.com",
  projectId: "x-force-app",
  storageBucket: "x-force-app.appspot.com",
  messagingSenderId: "490966280058"
};
firebase.initializeApp(config);

export const rootRef = firebase.database().ref();

