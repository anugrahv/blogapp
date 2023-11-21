// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {Firestore, getFirestore} from "firebase/firestore"
import {GoogleAuthProvider, getAuth,gooleAuthProvider} from 'firebase/auth' 
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyChABBCjEY_AwIL_mLs_cgT7kobuGCbaJ4",
  authDomain: "blockproject-2b33c.firebaseapp.com",
  projectId: "blockproject-2b33c",
  storageBucket: "blockproject-2b33c.appspot.com",
  messagingSenderId: "712180269189",
  appId: "1:712180269189:web:d0d822bea0b1120b13a9ec"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db=getFirestore(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();