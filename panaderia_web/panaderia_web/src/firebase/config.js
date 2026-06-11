// src/firebase/config.js
// ⚠️  REEMPLAZA ESTOS VALORES CON LOS DE TU PROYECTO EN FIREBASE CONSOLE
// Crea tu proyecto en: https://console.firebase.google.com
// Habilita: Authentication (Email/Password), Firestore, Storage

import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCUOC3IlqS0ugJHjd95tDcFuCBmWtFzwXI",
  authDomain: "panaderia-san-pedro.firebaseapp.com",
  projectId: "panaderia-san-pedro",
  storageBucket: "panaderia-san-pedro.firebasestorage.app",
  messagingSenderId: "740617583146",
  appId: "1:740617583146:web:ceef6366ee4b26321ea153"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const auth = getAuth(app);
export const storage = getStorage(app);

export default app;

