import React from "react";
import { makeStyles } from "@material-ui/core";

import ChatboxHeader from "./ChatboxHeader";

const useStyles = makeStyles({
  container: {},
});

function Chatbox() {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <ChatboxHeader />
    </div>
  );
}

export default Chatbox;
