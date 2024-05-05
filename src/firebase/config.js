import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from 'firebase/storage'
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB-EmMIhz6Vn8wI-q5-8UZFV7h1Nf2cCHA",
  authDomain: "react-olx-64316.firebaseapp.com",
  projectId: "react-olx-64316",
  storageBucket: "react-olx-64316.appspot.com",
  messagingSenderId: "884385892610",
  appId: "1:884385892610:web:d8ce8416750c09c6abda1b",
  measurementId: "G-4JVE6NZTH5"
};


const app = initializeApp(firebaseConfig)

export const storage = getStorage(app);
export const db = getFirestore(app);