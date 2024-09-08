// cara mengkonek kodeku dengan firestore

import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCADpTFBt4OeeYSjzbNbTj-P8LIOwyD4jM",
  authDomain: "todolist-react-4e2d6.firebaseapp.com",
  databaseURL:
    "https://todolist-react-4e2d6-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "todolist-react-4e2d6",
  storageBucket: "todolist-react-4e2d6.appspot.com",
  messagingSenderId: "441443572826",
  appId: "1:441443572826:web:08e9925ef77d941b95cc63",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Cloud Firestore and get a reference to the service
export const db = getFirestore(app);
