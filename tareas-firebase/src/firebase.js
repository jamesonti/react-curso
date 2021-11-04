import firebase from 'firebase/app'
import 'firebase/firestore'

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCk79qejGU5SbtrrpiZ7bAzKE5XFFp2XqA",
    authDomain: "crud-udemy-react-624e9.firebaseapp.com",
    projectId: "crud-udemy-react-624e9",
    storageBucket: "crud-udemy-react-624e9.appspot.com",
    messagingSenderId: "5433320143",
    appId: "1:5433320143:web:7f166ca4f976c36b774dba"
  };
  
  // Initialize Firebase
 firebase.initializeApp(firebaseConfig);

 export {firebase}