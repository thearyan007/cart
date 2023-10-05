import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";


const firebaseConfig = {
    apiKey: "AIzaSyAFZlqMYLNaWA3bv3dknfsDxGFS6RwJzqs",
    authDomain: "cart-6faec.firebaseapp.com",
    projectId: "cart-6faec",
    storageBucket: "cart-6faec.appspot.com",
    messagingSenderId: "530793448762",
    appId: "1:530793448762:web:ba8ca6f9c534ba88867c03"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);

ReactDOM.render(<App />, document.getElementById("root"))

