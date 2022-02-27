import firebase from "firebase";
import "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyCk8CEGTWtCfqkxhGWZYnzfk2WWrGxibXk",
    authDomain: "fir-learning-68598.firebaseapp.com",
    databaseURL: "https://fir-learning-68598-default-rtdb.firebaseio.com",
    projectId: "fir-learning-68598",
    storageBucket: "fir-learning-68598.appspot.com",
    messagingSenderId: "1071846304887",
    appId: "1:1071846304887:web:d5dc09a00e3ff4c9672a72"
  };

let app;

if (firebase.apps.length === 0){
    app = firebase.initializeApp(firebaseConfig);
}else{
    app = firebase.app();
}

const db = app.firestore();

export {db};