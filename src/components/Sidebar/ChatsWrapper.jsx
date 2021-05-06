import React from "react";
import { makeStyles } from "@material-ui/core";

import { useChatboxContext } from "../../contexts/ChatboxContext";

import ChatTab from "./ChatTab";

const useStyles = makeStyles({
  wrapper: {
    width: "100%",
    height: "100%",
    // background: "blue",
  },
});

const dummyData = [
  {
    name: "Jace Rohan",
    chatId: 1,
    img: "http://placeimg.com/640/480/city",
    messageInfo: "Paula56",
    read: false,
    unseen_num: 1,
  },
  {
    name: "Remington Hudson",
    chatId: 2,
    img: "http://placeimg.com/640/480/people",
    messageInfo: "hybrid reiciendis excepturi placeat",
    read: false,
    unseen_num: 2,
  },
  {
    name: "Osborne Senger",
    chatId: 3,
    img: "http://placeimg.com/640/480/sports",
    messageInfo: "tangible recusandae expedita illum",
    read: true,
  },
  {
    name: "Abdullah Hettinger",
    chatId: 4,
    img: "http://placeimg.com/640/480/nature",
    messageInfo: "impactful quo dolorum voluptatem",
    read: true,
  },
  {
    name: "Americo Simonis",
    chatId: 5,
    img: "http://placeimg.com/640/480/nature",
    messageInfo: "user-facing doloribus qui tempore",
    read: true,
  },
];

function ChatsWrapper() {
  const classes = useStyles();

  return (
    <div className={classes.wrapper}>
      {dummyData.map((cur) => (
        <ChatTab
          key={cur.chatId}
          chatId={cur.chatId}
          name={cur.name}
          img={cur.img}
          messageInfo={cur.messageInfo}
          read={cur.read}
          unseen_num={cur.unseen_num}
        />
      ))}
    </div>
  );
}

export default ChatsWrapper;
