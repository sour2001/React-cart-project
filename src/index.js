import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';


import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCvZXJo1e_peYXPA1zEllA1Vug76nS1q2I",
  authDomain: "cart-98463.firebaseapp.com",
  projectId: "cart-98463",
  storageBucket: "cart-98463.appspot.com",
  messagingSenderId: "735098020066",
  appId: "1:735098020066:web:f9512c2ed70c500fbabebb"
};

// Initialize Firebase
initializeApp(firebaseConfig);



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);


