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

function Chatbox({ name, img, chatboxId }) {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <ChatboxHeader name={name} img={img} chatboxId={chatboxId} />
      <ChatboxBody chatboxId={chatboxId} />
      <ChatboxFooter chatboxId={chatboxId} />
    </div>
  );
}

export default Chatbox;
