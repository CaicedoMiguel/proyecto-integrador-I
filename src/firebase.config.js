// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import  {getAuth} from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC7fQUtUzjcxFGotwtfjWP5cadv0paxLdA",
  authDomain: "tierra-santa-pi-i.firebaseapp.com",
  projectId: "tierra-santa-pi-i",
  storageBucket: "tierra-santa-pi-i.appspot.com",
  messagingSenderId: "13695817060",
  appId: "1:13695817060:web:e297642445f883fb0e5671"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

export const db = getFirestore(app);


