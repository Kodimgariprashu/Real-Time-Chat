import { initializeApp } from "firebase/app";

import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyB9K5rqi8r3xsbI88vUOaXxUwVMpNJLdYw",
  authDomain: "real-time-chat-89bbd.firebaseapp.com",
  projectId: "real-time-chat-89bbd",
  storageBucket: "real-time-chat-89bbd.appspot.com",
  messagingSenderId: "322995077879",
  appId: "1:322995077879:web:4f3177c78646cf47c609f2",
  measurementId: "G-XQYGFKVV70"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const storage = getStorage(app);
export const db = getFirestore(app);
