import firebase from "firebase";
import "firebase/firestore";
import "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyBPjbHVbFDvbfGzofaVbq248R-3-MfN5K0",
    authDomain: "signal-clone-38544.firebaseapp.com",
    projectId: "signal-clone-38544",
    storageBucket: "signal-clone-38544.appspot.com",
    messagingSenderId: "959989987237",
    appId: "1:959989987237:web:478f4eab9fa7c762835a4c",
    measurementId: "G-XQFSGD5311"
  };

let app;

if (firebase.apps.length === 0){
    app = firebase.initializeApp(firebaseConfig);
}else{
    app = firebase.app();
}

const db = app.firestore();
const auth = firebase.auth();

export {db, auth};