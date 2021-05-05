import React from "react";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
  individualContainer: {
    paddingRight: "9%",
    paddingLeft: "9%",
    marginBottom: 12,
  },
  chatTextWrapper: {
    display: "flex",
    flexDirection: "column",
  },
  chatTextContainer: {
    padding: "6px 7px 8px 9px",
    background: "#dcf8c6",
    position: "relative",
  },
  messageWrapperIn: {
    alignItems: "flex-start",
  },
  messageWrapperOut: {
    alignItems: "flex-end",
  },
  messageIn: {
    borderRadius: "0 7.5px 7.5px 7.5px",
    background: "#fff",
  },
  messageOut: {
    borderRadius: "7.5px 0 7.5px 7.5px",
    background: "#dcf8c6",
  },
  arrowIn: {
    position: "absolute",
    top: -6,
    left: -8,
    transform: "rotate(90deg)",
  },
  arrowOut: {
    position: "absolute",
    top: -2.7,
    right: -8,
  },
});

function Chat({ sent }) {
  const classes = useStyles();

  return (
    <div className={classes.individualContainer}>
      <div
        className={`${classes.chatTextWrapper} ${
          sent ? classes.messageWrapperOut : classes.messageWrapperIn
        }`}
      >
        <div
          className={`${classes.chatTextContainer} ${
            sent ? classes.messageOut : classes.messageIn
          }`}
        >
          <span className={sent ? classes.arrowOut : classes.arrowIn}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 8 13"
              width="8"
              height="13"
            >
              <path
                opacity=".13"
                d="M5.188 1H0v11.193l6.467-8.625C7.526 2.156 6.958 1 5.188 1z"
              ></path>
              <path
                fill={sent ? "#dcf8c6" : "#fff"}
                d="M5.188 0H0v11.193l6.467-8.625C7.526 1.156 6.958 0 5.188 0z"
              ></path>
            </svg>
          </span>
          <span>This is a given message</span>
        </div>
      </div>
    </div>
  );
}

export default Chat;
