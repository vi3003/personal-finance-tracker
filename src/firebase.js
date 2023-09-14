// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore, doc, setDoc } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBZU_txtSww2twgfIzgkgrrzCI-rj1VD9I",
  authDomain: "personal-finance-tracker-d5c3d.firebaseapp.com",
  projectId: "personal-finance-tracker-d5c3d",
  storageBucket: "personal-finance-tracker-d5c3d.appspot.com",
  messagingSenderId: "814938383973",
  appId: "1:814938383973:web:913402afbcc02bbc47888c",
  measurementId: "G-75LDM6SRHN"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
export { db, auth, provider, doc, setDoc };