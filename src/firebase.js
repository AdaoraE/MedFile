
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCfHCe9XKgke0GNzyYl5vefq65aZ3h5ZqY",
  authDomain: "medfile-health-tech.firebaseapp.com",
  projectId: "medfile-health-tech",
  storageBucket: "medfile-health-tech.appspot.com",
  messagingSenderId: "918781537434",
  appId: "1:918781537434:web:0ccd3779bc40c3578d0323",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
 export const auth = getAuth(app)