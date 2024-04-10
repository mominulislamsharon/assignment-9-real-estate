import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import { auth } from "../../Firebase/Firebase.config";

export const AuthContext = createContext(null);

const AuthProvider = ({children}) => {

  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [nameUser, setNameUser] = useState('');

  const googleProvider = new GoogleAuthProvider();

  const registerUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password)
  }

  const loginUser = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password)
  }

  const logOut = () => {
    setLoading(true);
    return signOut(auth);
  }

  const googleLogin = () => {
    setLoading(true);
    return signInWithPopup(auth, googleProvider);
  }
 

  useEffect(()=> {
    const unSubscribe = onAuthStateChanged(auth, currentUser => {
      console.log('user inta tmi', currentUser);
      setUser(currentUser);
      setLoading(false);
    });
    return () => {
      unSubscribe();
    }
  },[])

  const authUseInfo = {user, nameUser, setNameUser, loading, registerUser, loginUser, logOut, googleLogin};
  return (
    <div>
      <AuthContext.Provider value={authUseInfo}>{children}</AuthContext.Provider>
    </div>
  );
};

export default AuthProvider;