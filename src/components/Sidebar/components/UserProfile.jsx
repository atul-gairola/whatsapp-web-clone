import React from "react";
import { makeStyles, IconButton } from "@material-ui/core";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import { useAuth } from "../../../contexts/AuthContext";
import CameraAltIcon from "@material-ui/icons/CameraAlt";

const useStyles = makeStyles({
  container: {
    height: "100%",
    width: "100%",
    position: "absolute",
    left: 0,
    top: 0,
    zIndex: 100,
    display: "grid",
    gridTemplateRows: "calc(17% - 10px) 1fr",
  },
  header: {
    background: "#00bfa5",
    paddingRight: 20,
    paddingLeft: 23,
    paddingBottom: 10,
    display: "grid",
    alignContent: "end",
  },
  headingContainer: {
    display: "grid",
    gridTemplateColumns: "auto 1fr",
    alignItems: "center",
    gridGap: "20px",
    color: "#fff",
    "& .MuiIconButton-root": {
      color: "#fff",
      "&:hover": {
        backgroundColor: "inherit",
      },
    },
    "& h3": {
      fontWeight: 500,
      fontSize: 20,
    },
  },
  body: {
    background: "#ededed",
    display: "grid",
  },
  imgContainer: {
    margin: "28px 0",
    display: "grid",
    placeContent: "center",
  },
  display: {
    width: 200,
    height: 200,
    borderRadius: "50%",
    background: "pink",
    overflow: "hidden",
    position: "relative",
    cursor: "pointer",
    "& img": {
      height: "100%",
      width: "100%",
    },
  },
  overlay: {
    position: "absolute",
    width: "100%",
    height: "100%",
    display: "grid",
    placeContent: "center",
    color: "#fff",
    fontWeight: 400,
    textAlign: "center",
    background: "rgba(74, 74, 74, 0.7)",
    opacity: 0,
    "&:hover": {
        opacity: 0.9
    },
    transition: "0.95s"
  },
});

function UserProfile() {
  const classes = useStyles();
  const { currentUser } = useAuth();

  return (
    <div className={classes.container}>
      <header className={classes.header}>
        <div className={classes.headingContainer}>
          <div style={{ width: "fit-content" }}>
            <IconButton
              style={{ width: "auto" }}
              disableFocusRipple={true}
              disableRipple={true}
            >
              <ArrowBackIcon />
            </IconButton>
          </div>
          <h3>Profile</h3>
        </div>
      </header>
      <div className={classes.body}>
        <div className={classes.imgContainer}>
          <div className={classes.display}>
            <div className={classes.overlay}>
            <div>
              <CameraAltIcon />
              <p style={{fontSize: 13, paddingTop: 7}}>CHANGE <br /> PROILE PHOTO</p>
              </div>
            </div>
            <img src={currentUser.img} alt={currentUser.name} />
          </div>
        </div>
        <div className={classes.nameContainer}></div>
        <div className={classes.aboutContainer}></div>
      </div>
    </div>
  );
}

export default UserProfile;
