import React from "react";
import { makeStyles } from "@material-ui/core";
import Background from "../../images/bckg.png";

const useStyles = makeStyles({
  container: {
    backgroundImage: `url(${Background})`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "repeat",
    height: "100%",
    width: "100%",
    overflowX: "hidden",
    overflowY: "scroll"
  },
});

function ChatBoxBody() {
  const classes = useStyles();
  return <div className={classes.container}>a</div>;
}

export default ChatBoxBody;
