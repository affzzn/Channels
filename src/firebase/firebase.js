// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider, onAuthStateChanged, signOut } from "firebase/auth";




const firebaseConfig = {
    apiKey: "AIzaSyCjtNKnWtb33Rtam8bZ1xIdgcVjJTvKIX4",
    authDomain: "chatz-5ffe1.firebaseapp.com",
    projectId: "chatz-5ffe1",
    storageBucket: "chatz-5ffe1.appspot.com",
    messagingSenderId: "758227932360",
    appId: "1:758227932360:web:b8ecee5cac8345ea0c01fd"
  };


const app = initializeApp(firebaseConfig);

//connect 
const db = getFirestore(app);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();




export { auth, provider, onAuthStateChanged, signOut };
// export default db;

export { db as firestore };
export default app;