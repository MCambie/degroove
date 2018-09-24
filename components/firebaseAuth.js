import firebase from 'firebase';

const app = firebase.initializeApp({
  apiKey: "AIzaSyADbWGkRM5TWjiXT8jDsCR9JYOE67FycsA",
  authDomain: "degroove-b0aea.firebaseapp.com",
  databaseURL: "https://degroove-b0aea.firebaseio.com",
  projectId: "degroove-b0aea",
  storageBucket: "degroove-b0aea.appspot.com",
  messagingSenderId: "1084937618713"
});

export default app;
