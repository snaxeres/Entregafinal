import React from 'react'
import ReactDOM from 'react-dom/client'
import { initializeApp } from "firebase/app";
import App from './App.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css'


const firebaseConfig = {
  apiKey: "AIzaSyDD26lXjxGUL9ZAzed_8LkQB1qu918jMyM",
  authDomain: "seeds-rjs.firebaseapp.com",
  projectId: "seeds-rjs",
  storageBucket: "seeds-rjs.appspot.com",
  messagingSenderId: "901413352733",
  appId: "1:901413352733:web:286f5f40f310deeb1eddf4"
};


initializeApp(firebaseConfig);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
