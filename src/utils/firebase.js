
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyCo0IS8F9MI2KcEZjWrKSW0W7IXrN7nanM",
  authDomain: "filmgpt-ce12f.firebaseapp.com",
  projectId: "filmgpt-ce12f",
  storageBucket: "filmgpt-ce12f.appspot.com",
  messagingSenderId: "741004103120",
  appId: "1:741004103120:web:670918415b1aa5cce13dd5",
  measurementId: "G-CCV07JQT9E"
};


const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();