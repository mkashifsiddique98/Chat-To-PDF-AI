// Import the functions you need from the SDKs you need
import { getApp, getApps,initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
const firebaseConfig = {
  apiKey: "AIzaSyDje9HcxBsaLX2hEuJ6wEzxfXxFYikALH0",
  authDomain: "chat-to-pdf-ai.firebaseapp.com",
  projectId: "chat-to-pdf-ai",
  storageBucket: "chat-to-pdf-ai.firebasestorage.app",
  messagingSenderId: "182359338832",
  appId: "1:182359338832:web:76867748ce1a8f38450655",
  measurementId: "G-0Q0YVC3BYR"
};

const app = getApps().length ===0 ? initializeApp(firebaseConfig): getApp();

const db = getFirestore(app);

const storage = getStorage(app);

export {db, storage};