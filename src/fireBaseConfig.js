import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: import.meta.env.VITE_APIKEY,
  authDomain: import.meta.env.VITE_AUTH,
  projectId: import.meta.env.VITE_PROYECT_ID,
  storageBucket: import.meta.env.VITE_STORAGE,
  messagingSenderId: import.meta.env.VITE_MESSAGE,
  appId: import.meta.env.VITE_API_ID,
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore ( app )