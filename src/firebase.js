// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCLfI1Eh0xtFPkokKqlO0M-mD1HS5KV7HQ",
    authDomain: "kev-tasktraka.firebaseapp.com",
    projectId: "kev-tasktraka",
    storageBucket: "kev-tasktraka.appspot.com",
    messagingSenderId: "843490505219",
    appId: "1:843490505219:web:139cd0b8188fa8960b1436"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export { app, db };