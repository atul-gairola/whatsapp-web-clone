import React from "react";
import { makeStyles } from "@material-ui/core";

import ChatTab from "./ChatTab";

const useStyles = makeStyles({
  wrapper: {
    width: "100%",
    height: "100%",
    // background: "blue",
  },
});

function ChatsWrapper() {
  const classes = useStyles();

  return (
    <div className={classes.wrapper}>
      <ChatTab
        name="Jace Rohan"
        img="http://placeimg.com/640/480/city"
        messageInfo="Paula56"
        read={false}
        unseen_num={1}
      />
      <ChatTab
        name="Remington Hudson"
        img="http://placeimg.com/640/480/people"
        messageInfo="hybrid reiciendis excepturi placeat"
        read={false}
        unseen_num={2}
      />
      <ChatTab
        name="Osborne Senger"
        img="http://placeimg.com/640/480/sports"
        messageInfo="tangible recusandae expedita illum"
        read={true}
      />
      <ChatTab
        name="Abdullah Hettinger"
        img="http://placeimg.com/640/480/nature"
        messageInfo="impactful quo dolorum voluptatem"
        read={true}
      />
      <ChatTab
        name="Americo Simonis"
        img="http://placeimg.com/640/480/nature"
        messageInfo="user-facing doloribus qui tempore"
        read={true}
      />
    </div>
  );
}

export default ChatsWrapper;
