// Import the functions you need from the SDKs you need
import firebase from 'firebase/compat/app';

import 'firebase/compat/auth';




const app = firebase.initializeApp ({
  apiKey: "AIzaSyD8BR7EE3pVVnEiRvdzL78Em7lkM1rAujI",
  authDomain: "ecommerce-7a0ad.firebaseapp.com",
  projectId: "ecommerce-7a0ad",
  storageBucket: "ecommerce-7a0ad.appspot.com",
  messagingSenderId: "1060292182977",
  appId: "1:1060292182977:web:5cf66002b929de92d8e540",
  measurementId: "G-6F5MBFMLDL"
});

export const auth = app.auth();
export default app;