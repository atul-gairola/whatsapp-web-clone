import React, { useEffect, useRef } from "react";
import { makeStyles } from "@material-ui/core";
import Background from "../../../images/bckg.png";

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
    maxHeight: "calc(100vh - 62px - 59px)",
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
  const bodyRef = useRef();

  useEffect(() => {
    const el = bodyRef.current;
    el.scrollTop = el.scrollHeight;
  }, []);

  return (
    <div ref={bodyRef} className={classes.container}>
      <div className={classes.spaceDiv}></div>
      <div className={classes.wrapper}>
        <Chat
          sent={false}
          message="Hey"
          first
          smallMargin={false}
          status="seen"
        />
        <Chat sent={true} message="Hi" first smallMargin status="seen" />
        <Chat sent={true} message="How are you?" status="seen" />
        <Chat sent={true} message="How are you?" status="seen" />
        <Chat sent={true} message="How are you?" status="seen" />
        <Chat sent={true} message="How are you?" status="seen" />
        <Chat sent={true} message="How are you?" status="seen" />
        <Chat
          sent={false}
          message="I'm fine, wby?"
          first
          status="seen"
          smallMargin={false}
        />
        <Chat
          sent={false}
          message="I'm fine, wby?"
          first
          status="seen"
          smallMargin={false}
        />
        <Chat
          sent={false}
          message="I'm fine, wby?"
          first
          status="seen"
          smallMargin={false}
        />
        <Chat
          sent={false}
          message="I'm fine, wby?"
          first
          status="seen"
          smallMargin={false}
        />
        <Chat
          sent={false}
          message="I'm fine, wby?"
          first
          status="seen"
          smallMargin={false}
        />
        <Chat
          sent={false}
          message="I'm fine, wby?"
          first
          status="seen"
          smallMargin={false}
        />
        <Chat
          sent={false}
          message="I'm fine, wby?"
          first
          status="seen"
          smallMargin={false}
        />
        <Chat
          sent={false}
          message="I'm fine, wby?"
          first
          status="seen"
          smallMargin={false}
        />
        <Chat
          sent={false}
          message="I'm fine, wby?"
          first
          status="seen"
          smallMargin={false}
        />
        <Chat
          sent={false}
          message="I'm fine, wby?"
          first
          status="seen"
          smallMargin={false}
        />
        <Chat
          sent={false}
          message="I'm fine, wby?"
          first
          status="seen"
          smallMargin={false}
        />
        <Chat
          sent={true}
          message="I'm doing great"
          first
          smallMargin={false}
          status="recieved"
        />
      </div>
    </div>
  );
}

export default ChatBoxBody;
