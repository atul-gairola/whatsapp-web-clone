import React from "react";
import { makeStyles } from "@material-ui/core";
import Background from "../../images/bckg.png";

import Chat from "./Chat";

const useStyles = makeStyles({
  container: {
    backgroundImage: `url(${Background})`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "repeat",
    height: "100%",
    width: "100%",
    overflowX: "hidden",
    overflowY: "scroll",
    display: "flex",
    flexDirection: "column",
  },
  spaceDiv: {
    flex: "1 1 auto",
    minHeight: 12,
  },
  wrapper: {
    paddingBottom: 8,
    flex: "0 0 auto",
  },
});

function ChatBoxBody() {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <div className={classes.spaceDiv}></div>
      <div className={classes.wrapper}>
        <Chat sent={false} />
        <Chat sent={true} />
        <Chat sent={true} />
      </div>
    </div>
  );
}

export default ChatBoxBody;
