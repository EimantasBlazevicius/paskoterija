// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { collection, addDoc } from "firebase/firestore";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA1vCxqaC4VI8Uc7xMkjfwRc7jOOKjHUUU",
  authDomain: "pasloterija.firebaseapp.com",
  projectId: "pasloterija",
  storageBucket: "pasloterija.appspot.com",
  messagingSenderId: "167712835381",
  appId: "1:167712835381:web:dbb938c2a48d40fc29ee7c",
  measurementId: "G-88ZCX1MF2Q",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getFirestore(app);

const dbInstance = collection(database, "userData");

export const saveNote = () => {
  addDoc(dbInstance, {
    title: "noteTitle",
  });
};
