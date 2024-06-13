import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAhXSQ2su9tuLNjRatn2zrYCK3z6H4EYuk",
  authDomain: "fitness-app-d0996.firebaseapp.com",
  projectId: "fitness-app-d0996",
  storageBucket: "fitness-app-d0996.appspot.com",
  messagingSenderId: "449383154808",
  appId: "1:449383154808:web:98d0f1bb89f14270a8598d",
};
const firebaseApp = firebase.initializeApp(firebaseConfig);

// Use these for db & auth
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth, db };
