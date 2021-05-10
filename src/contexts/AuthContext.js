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
          // console.log(result);
          const data = {
            displayName: user.displayName,
            email: user.email,
            emailVerified: user.emailVerified,
            uid: user.uid,
            imageURL: additionalUserInfo.profile.picture,
            phoneNumber: user.phoneNumber,
          };

          const { data: respData } = await axios.post("/user", data);
          console.log(respData);
          setCurrentUser(respData);
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
    const unsubscribe = auth.onAuthStateChanged(async (user) => {
      setCurrentUser(user);
      if (user) {
        // set headers
        const token = await user.getIdToken(true);
        axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;

        try {
          // get the user from api
          const { data } = await axios.get(
            `http://localhost:8000/api/v1/user/${user.uid}`
          );
          setCurrentUser(data.user);
          setLoading(false);
        } catch (e) {
          console.log(e);
        }
      }
    });

    return unsubscribe;
  }, []);

  return (
    <AuthContext.Provider value={{ currentUser, signin, signout }}>
      {!loading && children}
    </AuthContext.Provider>
  );
}
