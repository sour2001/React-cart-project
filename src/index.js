import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyCvZXJo1e_peYXPA1zEllA1Vug76nS1q2I",
  authDomain: "cart-98463.firebaseapp.com",
  projectId: "cart-98463",
  storageBucket: "cart-98463.appspot.com",
  messagingSenderId: "735098020066",
  appId: "1:735098020066:web:f9512c2ed70c500fbabebb"
};

// Use this to initialize the firebase App
const firebaseApp = firebase.initializeApp(firebaseConfig);
// Use these for db & auth
const db = firebaseApp.firestore();
const auth = firebase.auth();
export { auth, db };








ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
