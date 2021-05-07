import React from "react";
import { makeStyles, Button } from "@material-ui/core";

import { useAuth } from "../contexts/AuthContext";

import WhatsappImg from "../images/whatsapp.png";

const useStyles = makeStyles({
  container: {
    display: "grid",
    placeContent: "center",
    height: "100vh",
    background: "#ededed",
  },
  card: {
    background: "#fff",
    borderRadius: "5px",
    display: "grid",
    textAlign: "center",
    placeContent: "center",
    placeItems: "center",
    padding: "30px",
    boxShadow: "0 2px 20px rgba(0,0,0,.1)",
  },
  title: {
    fontSize: "1.6rem",
    fontWeight: 600,
    marginBottom: 20,
  },
});

function Login() {
  const classes = useStyles();
  const { signin } = useAuth();

  return (
    <div className={classes.container}>
      <div className={classes.card}>
        <img
          style={{ width: 100, marginBottom: 50 }}
          src={WhatsappImg}
          alt="logo.png"
        />
        <p className={classes.title}>Welcome to WhatsApp Clone</p>
        <Button
          onClick={signin}
          color="primary"
          style={{ color: "#fff", fontWeight: 400, fontSize: 16 }}
          variant="contained"
        >
          Login with Gmail
        </Button>
      </div>
    </div>
  );
}

export default Login;
