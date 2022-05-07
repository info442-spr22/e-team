import firebase from 'firebase/compat/app';
import 'firebase/compat/analytics';

const firebaseConfig = {
  apiKey: "AIzaSyBd7wDt-wINXGhJFvepFBCkw2hB7L_pGHo",
  authDomain: "e-safety-info442.firebaseapp.com",
  projectId: "e-safety-info442",
  storageBucket: "e-safety-info442.appspot.com",
  messagingSenderId: "162100444389",
  appId: "1:162100444389:web:43e91bed2556d1d745e80c",
  measurementId: "G-QS95F445W0"
};

firebase.initializeApp(firebaseConfig);
firebase.analytics();