import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'
import {getAuth} from 'firebase/auth'
const firebaseConfig = {
  apiKey: process.env.REACT_APP_FB_API_KEY,
  authDomain: process.env.REACT_PP_FB_AUTHDOMAIN,
  projectId: process.env.REACT_APP_FB_PROJECT_ID ,
  storageBucket:process.env.REACT_APP_FB_STORAGE_BUCKET,
  messagingSenderId:process.env.REACT_APP_FB_MESSAGE_SENDER_ID,
  appId: process.env.REACT_APP_FB_APP_ID
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app)