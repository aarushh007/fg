import  {initializeApp} from 'firebase/app';
import {getAuth, GoogleAuthProvider} from 'firebase/auth'
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB4T8i3sQyVFJ2FrKmNaOiLy4k0MLqqqWY",
  authDomain: "reactfg-35d45.firebaseapp.com",
  projectId: "reactfg-35d45",
  storageBucket: "reactfg-35d45.appspot.com",
  messagingSenderId: "200204715936",
  appId: "1:200204715936:web:7cf7ab1b8825c7cd2606c5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
const db = getFirestore(app)
export {auth, provider, db};