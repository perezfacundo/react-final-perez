import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDCZpfoiX6AZZDCFtICrkbN0igcgFSdIPM",
  authDomain: "easy-tienda-77595.firebaseapp.com",
  projectId: "easy-tienda-77595",
  storageBucket: "easy-tienda-77595.firebasestorage.app",
  messagingSenderId: "286524666404",
  appId: "1:286524666404:web:5958d750d79ee98a75deb1"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);