
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";

import {  signInWithEmailAndPassword } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDwnFFYAgz1HWxMi2LCl3ryJnDRZ54vmtY",
  authDomain: "chat-application-37f82.firebaseapp.com",
  projectId: "chat-application-37f82",
  storageBucket: "chat-application-37f82.appspot.com",
  messagingSenderId: "94392481942",
  appId: "1:94392481942:web:03000b631f1bbbdfed6ab7"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore();