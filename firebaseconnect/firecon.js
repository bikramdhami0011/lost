// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getFirestore } from "firebase/firestore";
import {getAuth} from "firebase/auth"
import { getStorage } from "firebase/storage";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBDgnKes9I-N15lkoKddnTmDrUf0s56LR0",
  authDomain: "chatme-17faa.firebaseapp.com",
  projectId: "chatme-17faa",
  storageBucket: "chatme-17faa.appspot.com",
  messagingSenderId: "647196759847",
  appId: "1:647196759847:web:10dbeaddd2d31bd7b27b02"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth=getAuth(app);
export const FireBase= getFirestore(app);
export const FireStorage=getStorage(app);