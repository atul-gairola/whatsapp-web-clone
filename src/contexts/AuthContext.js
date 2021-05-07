import React, { createContext, useContext, useState, useEffect } from "react";

import { auth, googleAuthProvider } from "../firebase";

const AuthContext = createContext();

export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState();
  const [loading, setLoading] = useState(true);

  const signin = () => {
    auth
      .signInWithPopup(googleAuthProvider)
      .then((result) => console.log(result))
      .catch((err) => console.log(err));
  };

  const signout = () => {
    auth.signOut();
  };

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setCurrentUser(user);
      setLoading(false);
    });

    return unsubscribe;
  }, []);

  return (
    <AuthContext.Provider value={{ currentUser, signin, signout }}>
      {!loading && children}
    </AuthContext.Provider>
  );
}
