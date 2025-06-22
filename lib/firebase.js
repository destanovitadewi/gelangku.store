import { initializeApp, getApps, getApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Langsung hardcoded API key (tanpa .env)
const firebaseConfig = {
  apiKey: "AIzaSyAA8d9tqJaEgi8giJYM79HuS8HQR8D8Eak",
  authDomain: "uas-desta.firebaseapp.com",
  projectId: "uas-desta",
  storageBucket: "uas-desta.firebasestorage.app",
  messagingSenderId: "191605385856",
  appId: "1:191605385856:web:39d8f86c7736071a475465",
};

const app = getApps().length ? getApp() : initializeApp(firebaseConfig);
const db = getFirestore(app);

// ⚠️ Hapus auth agar tidak error
// const auth = getAuth(app);

export { db }; // export hanya db
