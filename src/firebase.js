
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyBolyyoiTj59XJdgWVgKToGsmHjf5_KAqs",
  authDomain: "medfile-health-tech-1.firebaseapp.com",
  projectId: "medfile-health-tech-1",
  storageBucket: "medfile-health-tech-1.appspot.com",
  messagingSenderId: "137038473276",
  appId: "1:137038473276:web:d050eddea7de7cd1f1bb39",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
 export const auth = getAuth(app)