
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyA4wedaTRiMppP0q9DejpNkCn2QWnDkLq8",
  authDomain: "book-list-with-firebase-62ac2.firebaseapp.com",
  projectId: "book-list-with-firebase-62ac2",
  storageBucket: "book-list-with-firebase-62ac2.appspot.com",
  messagingSenderId: "281721024041",
  appId: "1:281721024041:web:8919fd7a0c842ff1497638"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
