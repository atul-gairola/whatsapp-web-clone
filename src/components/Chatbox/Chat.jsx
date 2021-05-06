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
  smallMargin: {
    marginBottom: 2,
  },
  timestamp: {
    position: "relative",
    fontSize: 12,
    fontWeight: 400,
    color: "rgba(0,0,0,0.45)",
    // float: "right",
    margin: "-10px 0 -5px 4px",
    display: "grid",
    gridTemplateColumns: "auto auto",
    alignItems: "center",
    gridGap: 2
  },
});

const SentSVG = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 16 15"
      width="16"
      height="15"
    >
      <path
        fill="currentColor"
        d="M10.91 3.316l-.478-.372a.365.365 0 0 0-.51.063L4.566 9.879a.32.32 0 0 1-.484.033L1.891 7.769a.366.366 0 0 0-.515.006l-.423.433a.364.364 0 0 0 .006.514l3.258 3.185c.143.14.361.125.484-.033l6.272-8.048a.365.365 0 0 0-.063-.51z"
      ></path>
    </svg>
  );
};

const RecievedSVG = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 16 15"
      width="16"
      height="15"
    >
      <path
        fill="currentColor"
        d="M15.01 3.316l-.478-.372a.365.365 0 0 0-.51.063L8.666 9.879a.32.32 0 0 1-.484.033l-.358-.325a.319.319 0 0 0-.484.032l-.378.483a.418.418 0 0 0 .036.541l1.32 1.266c.143.14.361.125.484-.033l6.272-8.048a.366.366 0 0 0-.064-.512zm-4.1 0l-.478-.372a.365.365 0 0 0-.51.063L4.566 9.879a.32.32 0 0 1-.484.033L1.891 7.769a.366.366 0 0 0-.515.006l-.423.433a.364.364 0 0 0 .006.514l3.258 3.185c.143.14.361.125.484-.033l6.272-8.048a.365.365 0 0 0-.063-.51z"
      ></path>
    </svg>
  );
};

const SeenSVG = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 16 15"
      width="16"
      height="15"
      style={{color: "#4fc3f7"}}
    >
      <path
        fill="currentColor"
        d="M15.01 3.316l-.478-.372a.365.365 0 0 0-.51.063L8.666 9.879a.32.32 0 0 1-.484.033l-.358-.325a.319.319 0 0 0-.484.032l-.378.483a.418.418 0 0 0 .036.541l1.32 1.266c.143.14.361.125.484-.033l6.272-8.048a.366.366 0 0 0-.064-.512zm-4.1 0l-.478-.372a.365.365 0 0 0-.51.063L4.566 9.879a.32.32 0 0 1-.484.033L1.891 7.769a.366.366 0 0 0-.515.006l-.423.433a.364.364 0 0 0 .006.514l3.258 3.185c.143.14.361.125.484-.033l6.272-8.048a.365.365 0 0 0-.063-.51z"
      ></path>
    </svg>
  );
};

function Chat({ sent, smallMargin, message, first, status }) {
  const classes = useStyles();

  return (
    <div
      className={`${classes.individualContainer} ${
        smallMargin && classes.smallMargin
      }`}
    >
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
          {first && (
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
          )}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "auto auto",
              gridGap: 5,
              alignItems: "end",
            }}
          >
            <div>
              <div
                style={{
                  overflowWrap: "break-word",
                  whiteSpace: "pre-wrap",
                  fontSize: "14.2px",
                  fontWeight: 400,
                }}
              >
                <span>{message}</span>
              </div>
            </div>
            <div className={classes.timestamp}>
              <span>7:26 PM</span>
              <span style={{marginBottom: -2}} >
                {status === "sent" ? (
                  <SentSVG />
                ) : status === "recieved" ? (
                  <RecievedSVG />
                ) : (
                  status === "seen" && <SeenSVG />
                )}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Chat;
