import firebase from 'firebase';
import Rebase from 're-base';
require('firebase/firestore');

const app = firebase.initializeApp({
  apiKey: "AIzaSyADbWGkRM5TWjiXT8jDsCR9JYOE67FycsA",
  authDomain: "degroove-b0aea.firebaseapp.com",
  databaseURL: "https://degroove-b0aea.firebaseio.com",
  projectId: "degroove-b0aea",
  storageBucket: "degroove-b0aea.appspot.com",
  messagingSenderId: "1084937618713"
});

// const firestore = app.firestore();
// const settings = { timestampsInSnapshots: true };
// firestore.settings(settings);
//
// const base = Rebase.createClass(firestore);

export default app;
