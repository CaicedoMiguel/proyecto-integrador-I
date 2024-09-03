// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import  {getAuth} from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC8zjO4otwnFgtlDfftb0Jkei01phJqH9I",
  authDomain: "proyecto-pi-edf34.firebaseapp.com",
  projectId: "proyecto-pi-edf34",
  storageBucket: "proyecto-pi-edf34.appspot.com",
  messagingSenderId: "423764092882",
  appId: "1:423764092882:web:ad8a284832db846fa7ca0b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

const db = getFirestore(app);

export default db;
