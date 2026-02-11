import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBsVaJ6Zv_CNeqzQS2ct78jFwSM4LRILao",
  authDomain: "beansy-food.firebaseapp.com",
  projectId: "beansy-food",
  storageBucket: "beansy-food.firebasestorage.app",
  messagingSenderId: "891622040801",
  appId: "1:891622040801:web:6cedcc25d9dd30c38f83a0",
  measurementId: "G-R322JF78VF"
};


const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
