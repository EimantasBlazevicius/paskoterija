import React from "react";
import Container from "@mui/material/Container";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

import NavLine from "../components/navigation.component";
import { Outlet, useNavigate } from "react-router-dom";
import { UserContext } from "../Context/userContext";

import { initializeApp } from "firebase/app";
import {
  collection,
  addDoc,
  getFirestore,
  query,
  getDocs,
  where,
} from "firebase/firestore";
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  signOut,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  sendPasswordResetEmail,
} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyA1vCxqaC4VI8Uc7xMkjfwRc7jOOKjHUUU",
  authDomain: "pasloterija.firebaseapp.com",
  projectId: "pasloterija",
  storageBucket: "pasloterija.appspot.com",
  messagingSenderId: "167712835381",
  appId: "1:167712835381:web:dbb938c2a48d40fc29ee7c",
  measurementId: "G-88ZCX1MF2Q",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

export default function Root() {
  const [menuOpen, setMenuOpen] = React.useState<boolean>(false);
  const [user, setUser] = React.useState({});
  const [loggedIn, setLoggedIn] = React.useState(false);
  const [userData, setUserData] = React.useState({});
  const navigate = useNavigate();

  const getUserData = async (uid: string) => {
    const q = query(collection(db, "users"), where("uid", "==", uid));

    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
      setUserData(doc.data());
    });
  };

  const signInWithGoogle = async () => {
    try {
      const googleProvider = new GoogleAuthProvider();
      const res = await signInWithPopup(auth, googleProvider);
      const newUser = res.user;
      getUserData(newUser.uid);
      setUser(newUser);
      const q = query(collection(db, "users"), where("uid", "==", newUser.uid));
      const docs = await getDocs(q);

      if (docs.docs.length === 0) {
        await addDoc(collection(db, "users"), {
          uid: newUser.uid,
          name: newUser.displayName,
          authProvider: "google",
          email: newUser.email,
        });
      }
      navigate("/");
    } catch (err) {
      console.error(err);
    }
  };

  const logOut = () => {
    signOut(auth)
      .then(() => {
        console.log("signed out with google");
      })
      .catch((error) => {
        console.error("SignOut failed", error);
      });
  };

  const logInWithEmailAndPassword = async (email: string, password: string) => {
    try {
      const res = await signInWithEmailAndPassword(auth, email, password);
      const newUser = res.user;
      setUser(newUser);
      getUserData(newUser.uid);
    } catch (err) {
      console.error(err);
    }
  };

  const registerWithEmailAndPassword = async (
    name: string,
    email: string,
    password: string
  ) => {
    try {
      const res = await createUserWithEmailAndPassword(auth, email, password);
      const newUser = res.user;
      await addDoc(collection(db, "users"), {
        uid: newUser.uid,
        name,
        authProvider: "local",
        email,
      });
      setUser(newUser);
      setUserData(getUserData(newUser.uid));
    } catch (err) {
      console.error(err);
    }
  };

  const sendPasswordReset = async (email: string) => {
    try {
      await sendPasswordResetEmail(auth, email);
    } catch (err) {
      console.error(err);
    }
  };

  React.useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setLoggedIn(true);
        getUserData(user.uid);
      } else {
        setLoggedIn(false);
      }
    });
  }, [user]);

  const toggleDrawer = (open: boolean) => {
    setMenuOpen(open);
  };

  return (
    <UserContext.Provider
      value={{
        user,
        userData,
        loggedIn,
        setUser,
        signInWithGoogle,
        logOut,
        logInWithEmailAndPassword,
        registerWithEmailAndPassword,
        sendPasswordReset,
      }}
    >
      <Container maxWidth="xl" disableGutters>
        <NavLine toggleDrawer={toggleDrawer} menuOpen={menuOpen} />
        <Outlet />
      </Container>
    </UserContext.Provider>
  );
}
