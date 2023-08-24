// Import the functions you need from the SDKs you need
import firebase from 'firebase/compat/app';
import 'firebase/auth';
import 'firebase/firestore';

const firebaseConfig ={
  apiKey: "AIzaSyCxgZ_zxLlz6UBeKA6I9KS6_TymKfbLQdI",
  authDomain: "chatbox-13451.firebaseapp.com",
  projectId: "chatbox-13451",
  storageBucket: "chatbox-13451.appspot.com",
  messagingSenderId: "980099977557",
  appId: "1:980099977557:web:d6e46906df0ac3f509dfdc",
  measurementId: "G-ZFEBFPFC9Z"
}

const app = firebase.initializeApp(firebaseConfig);

export const auth = app.auth();
export const firestore = app.firestore();

export default app;