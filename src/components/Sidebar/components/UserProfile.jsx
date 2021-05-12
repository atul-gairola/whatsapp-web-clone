import React, { useState } from "react";
import {
  makeStyles,
  IconButton,
  ClickAwayListener,
  CircularProgress,
} from "@material-ui/core";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import { useAuth } from "../../../contexts/AuthContext";
import CameraAltIcon from "@material-ui/icons/CameraAlt";
import EditIcon from "@material-ui/icons/Edit";
import DoneIcon from "@material-ui/icons/Done";
import InsertEmoticonIcon from "@material-ui/icons/InsertEmoticon";
import { Picker } from "emoji-mart";
import "emoji-mart/css/emoji-mart.css";
import axios from "axios";

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
    display: "flex",
    flexDirection: "column",
    overflowX: "hidden",
    overflowY: "auto",
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
  info: {
    padding: "0 40px",
    marginBottom: "20px",
    marginTop: "10px",
    "& p": {
      color: "rgba(0,0,0,0.45)",
      lineHeight: "20px",
      fontSize: 14,
    },
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
    nameEmojie: false,
    aboutEmojie: false,
  });

  const [emojiPickerStyle1, setEmojiPickerStyle1] = useState({
    position: "absolute",
    zIndex: 400,
  });

  const [emojiPickerStyle2, setEmojiPickerStyle2] = useState({
    position: "absolute",
    zIndex: 400,
  });

  const [loading, setLoading] = useState({
    name: false,
    about: false,
  });

  //   HANDLERS
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

  const handleEmojiePicker = (e, inputName) => {
    setEditable((prev) => ({
      ...prev,
      [inputName + "Emojie"]: true,
    }));

    inputName === "name"
      ? setEmojiPickerStyle1((prev) => ({
          ...prev,
          left: e.pageX + 5 + "px",
          top: e.pageY - 354 - 15 + "px",
        }))
      : setEmojiPickerStyle2((prev) => ({
          ...prev,
          left: e.pageX + 5 + "px",
          top: e.pageY - 354 - 15 + "px",
        }));
  };

  const handleClickAway = (name) => {
    setEditable((prev) => ({
      ...prev,
      [name + "Emojie"]: false,
    }));
  };

  const handleEmojiSelect = (emoji, inputName) => {
    setValues((prev) => ({
      ...prev,
      [inputName]: prev[inputName] + emoji.native,
    }));
  };

  const handleSubmit = async (inputName) => {
    setLoading((prev) => ({
      ...prev,
      [inputName]: true,
    }));

    let updateData;

    if (inputName === "name") {
      updateData = {
        displayName: values[inputName],
      };
    } else {
      updateData = {
        [inputName]: values[inputName],
      };
    }

    // console.log(updateData);

    // send request to update user data
    const { data } = await axios.patch(`/user/${currentUser.googleUID}`, updateData);

    console.log(data);

    setLoading((prev) => ({
      ...prev,
      [inputName]: false,
    }));
  };

  return (
    <>
      {editable.nameEmojie && (
        <ClickAwayListener onClickAway={() => handleClickAway("name")}>
          <Picker
            showPreview={false}
            showSkinTones={false}
            onSelect={(e) => handleEmojiSelect(e, "name")}
            style={emojiPickerStyle1}
          />
        </ClickAwayListener>
      )}
      {editable.aboutEmojie && (
        <ClickAwayListener onClickAway={() => handleClickAway("about")}>
          <Picker
            showPreview={false}
            showSkinTones={false}
            onSelect={(e) => handleEmojiSelect(e, "about")}
            style={emojiPickerStyle2}
          />
        </ClickAwayListener>
      )}
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
                {loading.name ? (
                  <CircularProgress size={20} />
                ) : (
                  <>
                    {editable.name && (
                      <InsertEmoticonIcon
                        onClick={(e) => handleEmojiePicker(e, "name")}
                        style={{ cursor: "pointer", marginRight: 5 }}
                      />
                    )}
                    <button
                      onClick={() => handleEditToggle("name")}
                      title="Edit"
                    >
                      {editable.name ? (
                        <DoneIcon onClick={() => handleSubmit("name")} />
                      ) : (
                        <EditIcon />
                      )}
                    </button>
                  </>
                )}{" "}
              </div>
            </div>
          </div>
          <div className={classes.info}>
            <p>
              This is not your username or pin. This name will be visible to
              your WhatsApp contacts.
            </p>
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
                {loading.about ? (
                  <CircularProgress size={20} />
                ) : (
                  <>
                    {editable.about && (
                      <InsertEmoticonIcon
                        onClick={(e) => handleEmojiePicker(e, "about")}
                        style={{ cursor: "pointer", marginRight: 5 }}
                      />
                    )}
                    <button
                      onClick={() => handleEditToggle("about")}
                      title="Edit"
                    >
                      {editable.about ? (
                        <DoneIcon onClick={() => handleSubmit("about")} />
                      ) : (
                        <EditIcon />
                      )}
                    </button>
                  </>
                )}{" "}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default UserProfile;
