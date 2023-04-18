// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { Auth, createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signOut } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCphfwHqXc1Yti1Vt9J4BGAlz5zDxaGQz4",
  authDomain: "react-netflix-clone-13059.firebaseapp.com",
  projectId: "react-netflix-clone-13059",
  storageBucket: "react-netflix-clone-13059.appspot.com",
  messagingSenderId: "721915228897",
  appId: "1:721915228897:web:e58843013e5bd153b57da0",
  measurementId: "G-RJ36TMH0B8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const firebaseAuth = getAuth(app);
export const createUser = async (auth: Auth, email:string, password:string ) => {
  await createUserWithEmailAndPassword(auth, email, password);
};
export const signIn = async(auth: Auth, email:string, password:string) => {
  await signInWithEmailAndPassword(auth, email, password)
};

export const logOut = async(auth:Auth) => {
  await signOut(auth);
}

