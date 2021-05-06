import React from "react";
import { makeStyles } from "@material-ui/core";
import InitialImg from "../images/intro-connection-light.jpg";
import LaptopMacIcon from "@material-ui/icons/LaptopMac";

const useStyles = makeStyles((theme) => ({
  container: {
    width: "100%",
    height: "100%",
    background: "#f8f9fa",
    display: "grid",
    placeItems: "center",
    textAlign: "center",
    "& h1": {
      color: "#525252",
    },
  },
  title: {
    fontSize: 32,
    fontWeight: 300,
    marginTop: 28,
  },
  subtitle: {
    fontWeight: 400,
    color: "rgba(0, 0, 0, 0.45)",
    fontSize: 17,
    marginTop: 18,
    maxWidth: 500,
    paddingBottom: 40,
    borderBottom: "1.6px solid rgba(0,0,0,0.08)",
  },
  image: {
    width: "250px",
  },
  afterline: {
    display: "grid",
    alignItems: "center",
    gridTemplateColumns: "auto auto",
    margin: "20px auto",
    justifyContent: "center",
    color: "rgba(0, 0, 0, 0.45)",
    fontSize: 16,
    fontWeight: 400,
    gridGap: 8,
    "& a": {
      color: theme.palette.primary.main,
      cursor: "pointer",
      textDecoration: "none",
    },
  },
}));

function InitialDisplayBox() {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <div className={classes.inside_container}>
        <img className={classes.image} src={InitialImg} alt="initial" />
        <h1 className={classes.title}>Welcome to WhatsApp Web</h1>
        <p className={classes.subtitle}>
          Chat in realtime with your family, friends and colleagues and never
          miss out on those who really matter.
        </p>
        <div className={classes.afterline}>
          <LaptopMacIcon style={{ marginTop: "3px" }} fontSize="small" />
          <p>
            Original WhatsApp for Windows.{" "}
            <a href="https://www.whatsapp.com/download">Get it here.</a>{" "}
          </p>
        </div>
      </div>
    </div>
  );
}

export default InitialDisplayBox;
