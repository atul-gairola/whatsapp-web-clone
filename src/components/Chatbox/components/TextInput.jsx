import React from "react";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
  container: {
    padding: "10px 17px",
    margin: "5px 10px",
    background: "#fff",
    border: "1px solid #fff",
    borderRadius: 21,
    flex: 1,
    minHeight: 20,
    width: "100%",
    fontSize: 15,
    "&::placeholder": {
      fontSize: 15,
      color: "#999",
    },
  },
});

function TextInput({ handleOnBlur, handleOnFocus }) {
  const classes = useStyles();
  return (
    <input
      onFocus={handleOnFocus}
      onBlur={handleOnBlur}
      placeholder="Type a message"
      className={classes.container}
      autoFocus
    ></input>
  );
}

export default TextInput;
