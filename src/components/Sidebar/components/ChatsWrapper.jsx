import React from "react";
import { makeStyles } from "@material-ui/core";

import ChatTab from "./ChatTab";
import { useAuth } from "../../../contexts/AuthContext";

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

function ChatsWrapper({ chats }) {
  const classes = useStyles();
  const { currentUser } = useAuth();
  console.log(chats);
  return (
    <div className={classes.wrapper}>
      {chats.map((cur) => {
        let chatMember;
        if (!cur.isGroup) {
          chatMember = cur.members.filter((cur) => cur._id !== currentUser.id)[0];
        }
        return (
          <ChatTab
            key={cur._id}
            chatId={cur._id}
            name={chatMember.displayName}
            img={chatMember.imageURL}
            lastMessage={cur.lastMessage}
            messageInfo={dummyData[0].messageInfo}
            read={dummyData[0].read}
            unseen_num={dummyData[0].unseen_num}
          />
        );
      })}
    </div>
  );
}

export default ChatsWrapper;
