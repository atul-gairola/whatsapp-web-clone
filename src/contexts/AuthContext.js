import React, { createContext, useContext, useState, useEffect } from "react";
import { auth, googleAuthProvider } from "../firebase";
import axios from "axios";

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
      .then(async (result) => {
        try {
          const { user, additionalUserInfo } = result;
          console.log(result);
          const data = {
            displayName: user.displayName,
            email: user.email,
            emailVerified: user.emailVerified,
            uid: additionalUserInfo.profile.id,
            imageURL: additionalUserInfo.profile.picture,
            phoneNumber: user.phoneNumber,
          };

          const resp = await axios.post("/user", data);
          console.log(resp);
        } catch (e) {
          console.log(e);
        }
      })
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
