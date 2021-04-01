
import firebase from 'firebase/app'
import 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyC6_agZ6GCsx0zPNRg4ukq5fi8GYzfJOF4",
    authDomain: "restaurante-7b6ef.firebaseapp.com",
    projectId: "restaurante-7b6ef",
    storageBucket: "restaurante-7b6ef.appspot.com",
    messagingSenderId: "93093214494",
    appId: "1:93093214494:web:9837136d7c195ad8f4710f",
    measurementId: "G-CSWL4C3554"
  };
  // Initialize Firebase
 export const firebaseApp = firebase.initializeApp(firebaseConfig);
  