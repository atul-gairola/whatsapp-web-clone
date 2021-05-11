import React, { useState } from "react";
import { makeStyles, IconButton } from "@material-ui/core";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import { useAuth } from "../../../contexts/AuthContext";
import CameraAltIcon from "@material-ui/icons/CameraAlt";
import EditIcon from "@material-ui/icons/Edit";
import DoneIcon from "@material-ui/icons/Done";

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
      opacity: 0.9,
    },
    transition: "0.95s",
  },
  inputContainer: {
    background: "#fff",
    boxShadow: "0 1px 3px rgba(0,0,0,0.08)",
    padding: "20px 40px",
    "& label": {
      fontSize: 16,
      color: "#009688",
      fontWeight: 500,
    },
  },
  inputDiv: {
    display: "flex",
    color: "#919191",
    "& input": {
      flexGrow: 1,
      marginRight: 10,
      border: "none",
      fontSize: 17,
      color: "#4a4a4a",
      "&:disabled": {
        backgroundColor: "transparent",
      },
    },
    "& > button": {
      color: "#919191",
      cursor: "pointer",
      background: "transparent",
      border: "none",
    },
  },
  active: {
    borderBottom: "2px solid #00bfa5",
  },
});

function UserProfile() {
  const classes = useStyles();
  const { currentUser } = useAuth();

  //   states
  const [values, setValues] = useState({
    name: currentUser.name,
    about: currentUser.about || "",
  });

  const [editable, setEditable] = useState({
    name: false,
    about: false,
  });

  //   handlers

  const handleEditToggle = (str) => {
    setEditable((prev) => ({
      ...prev,
      [str]: !prev[str],
    }));
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setValues((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

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
                <p style={{ fontSize: 13, paddingTop: 7 }}>
                  CHANGE <br /> PROILE PHOTO
                </p>
              </div>
            </div>
            <img src={currentUser.img} alt={currentUser.name} />
          </div>
        </div>
        <div className={classes.nameContainer}>
          <div className={classes.inputContainer}>
            <div style={{ marginBottom: 19 }}>
              <label>Your Name</label>
            </div>
            <div
              className={`${classes.inputDiv} ${
                editable.name && classes.active
              }`}
            >
              <input
                autoComplete="off"
                value={values.name}
                onChange={handleInputChange}
                name="name"
                type="text"
                placeholder="Write your name"
                disabled={!editable.name}
              />
              <button onClick={() => handleEditToggle("name")} title="Edit">
                {editable.name ? <DoneIcon /> : <EditIcon />}
              </button>
            </div>
          </div>
        </div>
        <div className={classes.aboutContainer}>
          <div className={classes.inputContainer}>
            <div style={{ marginBottom: 19 }}>
              <label>About</label>
            </div>
            <div
              className={`${classes.inputDiv} ${
                editable.about && classes.active
              }`}
            >
              <input
                autoComplete="off"
                value={values.about}
                onChange={handleInputChange}
                name="about"
                type="text"
                placeholder="Write about yourself"
                disabled={!editable.about}
              />
              <button onClick={() => handleEditToggle("about")} title="Edit">
                {editable.about ? <DoneIcon /> : <EditIcon />}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserProfile;
