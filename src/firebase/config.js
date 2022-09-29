
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBvA7pPl-48tOCP2bBB4-RBrd874yBFZE0",
  authDomain: "team-prolog-363123.firebaseapp.com",
  projectId: "team-prolog-363123",
  storageBucket: "team-prolog-363123.appspot.com",
  messagingSenderId: "460270658005",
  appId: "1:460270658005:web:b69ed7f9c353dc19c51d5c"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth();

export { auth };