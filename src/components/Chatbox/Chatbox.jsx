import React from "react";
import { makeStyles } from "@material-ui/core";

import ChatboxHeader from "./ChatboxHeader";
import ChatboxBody from "./ChatBoxBody";
import ChatboxFooter from "./ChatboxFooter";

const useStyles = makeStyles({
  container: {
    display: "grid",
    height: "100%",
    gridTemplateColumns: "1fr",
    gridTemplateRows: "auto 1fr auto",
  },
});

function Chatbox() {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <ChatboxHeader />
      <ChatboxBody />
      <ChatboxFooter />
    </div>
  );
}

export default Chatbox;
