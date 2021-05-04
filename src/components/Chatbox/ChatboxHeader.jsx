import React from "react";
import { makeStyles, IconButton } from "@material-ui/core";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import Avatar from "@material-ui/core/Avatar";

const useStyles = makeStyles({
  headerContainer: {
    height: 59,
    background: "#ededed",
    padding: "10px 16px",
    display: "flex",
    gridTemplateColumns: "1fr 1fr",
    boxSizing: "border-box",
    borderLeft: "1px solid rgba(0,0,0,0.08)",
    // alignItems: "center"
  },
  iconsContainer: {
    justifySelf: "end",
    height: "100%",
    display: "grid",
    alignContent: "center",
    "& button": {
      color: "#919191",
    },
  },
  chatBoxHeadingWrapper: {
    display: "flex",
    flexGrow: 1,
  },
  infoContainer: {
    display: "flex",
    flexDirection: "column",
    cursor: "pointer",
    flexGrow: 1,
    marginRight: 10,
    justifyContent: "center",
    fontSize: 13,
    color: "rgba(0,0,0,0.6)",
    "& span": {
      color: "#000",
      fontSize: 16,
      fontWeight: 400,
    },
  },
});

function ChatboxHeader({ name, info, img, isGroup }) {
  const classes = useStyles();
  return (
    <div className={classes.headerContainer}>
      <div className={classes.chatBoxHeadingWrapper}>
        <Avatar
          style={{ cursor: "pointer", marginRight: 15 }}
          alt="Remy Sharp"
          src="http://placeimg.com/640/480/abstract"
        />
        <div className={classes.infoContainer}>
          <div>
            <span>Person Name</span>
          </div>
          <div style={{ textOverflow: "ellipsis" }}>
            click here for contact info
          </div>
        </div>
      </div>
      <div className={classes.iconsContainer}>
        <IconButton>
          <MoreVertIcon />
        </IconButton>
      </div>
    </div>
  );
}

export default ChatboxHeader;
