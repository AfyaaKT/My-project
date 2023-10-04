import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'
const firebaseConfig = {
  apiKey: "AIzaSyBGOjxNDFoC2WgUSxdChLa1F_hw7ClYNuw",
  authDomain: "e-commerce-cb3de.firebaseapp.com",
  projectId: "e-commerce-cb3de",
  storageBucket: "e-commerce-cb3de.appspot.com",
  messagingSenderId: "1021598700239",
  appId: "1:1021598700239:web:aef5c7128c6f8f670b5dba"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);