import firebase from "firebase/app";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyC0rQgaRtjIxO473mKtCZNLirrZ_aFqgJA",
  authDomain: "whatsapp-clone-af2cd.firebaseapp.com",
  projectId: "whatsapp-clone-af2cd",
  storageBucket: "whatsapp-clone-af2cd.appspot.com",
  messagingSenderId: "863230303087",
  appId: "1:863230303087:web:908e0f23e24e302462a69a",
  measurementId: "G-NFYKLBX2E5",
};

const app = firebase.initializeApp(firebaseConfig);
const auth = app.auth();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export { app, auth, googleAuthProvider };
