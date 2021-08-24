import React, { useState } from "react";
import { makeStyles, Avatar } from "@material-ui/core";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

import { useChatboxContext } from "../../../contexts/ChatboxContext";
import { convertTimestamp } from "../../../utils";

const useStyles = makeStyles((theme) => ({
  container: {
    padding: "0 15px",
    height: "72px",
    display: "grid",
    gridTemplateColumns: "auto 1fr",
    gridGap: "15px",
    alignItems: "center",
    cursor: "pointer",
    "&:hover": {
      background: "#f5f5f5",
    },
  },
  infoContainer: {
    height: "100%",
    display: "grid",
    alignContent: "center",
    borderTop: "1px solid #f2f2f2",
  },
  titleContainer: {
    width: "100%",
    display: "grid",
    gridTemplateColumns: "auto 1fr",
    alignItems: "center",
    gridGap: "3px",
    "& h3": {
      fontSize: "17px",
      fontWeight: "400",
      overflow: "hidden",
      textOverflow: "ellipsis",
      whiteSpace: "nowrap",
    },
    "& p": {
      justifySelf: "end",
      fontSize: 12,
      color: "rgba(0,0,0,0.5)",
      whiteSpace: "nowrap",
    },
  },
  msg: {
    overflow: "hidden",
    textOverflow: "ellipsis",
    whiteSpace: "nowrap",
    fontSize: 14,
    marginTop: 2,
    color: "rgba(0,0,0,0.6)",
  },
  badge: {
    background: "#06d755",
    borderRadius: "1.3em",
    justifySelf: "end",
    fontSize: 12,
    minWidth: ".9em",
    fontWeight: 600,
    minHeight: "1em",
    border: "none",
    color: "#fff",
    padding: ".2em .5em",
    textAlign: "center",
  },
  bottomContainer: {
    display: "grid",
    gridTemplateColumns: "auto 1fr",
    gridGap: "8px",
  },
  actionContainer: {
    justifySelf: "end",
    display: "flex",
    alignItems: "center",
    "& > .MuiSvgIcon-root": {
      color: "#919191",
      fontSize: "1.7rem",
    },
  },
}));

function ChatTab({
  img,
  name,
  messageInfo,
  time,
  chatId,
  read,
  unseen_num,
  lastMessage,
}) {
  const classes = useStyles();
  const [hover, setHover] = useState(false);
  const { updateChatbox } = useChatboxContext();

  const handleClick = (e) => {
    e.preventDefault();
    updateChatbox({
      img,
      name,
      chatId,
    });
  };

  const unreadStyle = {
    color: "#000",
    fontWeight: "600",
  };

  const Badge = ({ num }) => {
    return <span className={classes.badge}>{num}</span>;
  };

  return (
    <div
      onClick={handleClick}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      className={classes.container}
    >
      <div className={classes.avtContainer}>
        <Avatar alt="Remy Sharp" src={img} style={{ width: 49, height: 49 }} />
      </div>
      <div className={classes.infoContainer}>
        <div className={classes.titleContainer}>
          <h3 style={!read ? unreadStyle : { color: "inherit" }}>{name}</h3>
          <p style={!read ? unreadStyle : { color: "inherit" }}>
            {convertTimestamp(lastMessage.createdAt).hour +
              " : " +
              convertTimestamp(lastMessage.createdAt).minutes +
              " " +
              convertTimestamp(lastMessage.createdAt).period}
          </p>
        </div>
        <div className={classes.bottomContainer}>
          <p
            className={classes.msg}
            style={!read ? unreadStyle : { color: "inherit" }}
          >
            {lastMessage.content}
          </p>
          <div className={classes.actionContainer}>
            {!read && <Badge num={unseen_num} />}
            {hover && <ExpandMoreIcon />}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ChatTab;
