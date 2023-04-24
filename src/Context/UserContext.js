import React, { createContext, useEffect, useState } from "react";
import app from "../firebase/firebase.config";
import {
  getAuth,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider,
  signOut,
  FacebookAuthProvider,
} from "firebase/auth";

export const AuthContext = createContext();
const auth = getAuth(app);

const UserContext = ({ children }) => {
  const [user, setUser] = useState({});
  const [loading, setLoading] = useState(true);

  const googleProvider = new GoogleAuthProvider();
  const facebookProvider = new FacebookAuthProvider();

  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const login = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };
  const signInWithGoogle = () => {
    return signInWithPopup(auth, googleProvider);
  };

  const signInWithFacebook = () =>{
   return signInWithPopup(auth, facebookProvider);
  }

  const logOut = () => {
    return signOut(auth);
  };

  // for log in  log out user changed

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
      // console.log(currentUser);
    });
    return () => {
      unsubscribe();
    };
  }, []);

  const info = {
    createUser,
    user,
    login,
    signInWithGoogle,
    logOut,
    signInWithFacebook,
    loading,
  };

  return (
    <div>
      <AuthContext.Provider value={info}> {children} </AuthContext.Provider>
    </div>
  );
};

export default UserContext;
