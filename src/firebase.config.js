
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAQaHmXniH4iiYsxD-aNM4X8GGgcQlI064",
  authDomain: "mfdr-2503.firebaseapp.com",
  projectId: "mfdr-2503",
  storageBucket: "mfdr-2503.firebasestorage.app",
  messagingSenderId: "1028099728995",
  appId: "1:1028099728995:web:27abd19a4668812d063a56"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)