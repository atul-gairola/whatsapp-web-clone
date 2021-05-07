import React from "react";
import { makeStyles, IconButton } from "@material-ui/core";
import ChatIcon from "@material-ui/icons/Chat";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import DataUsageIcon from "@material-ui/icons/DataUsage";
import Avatar from "@material-ui/core/Avatar";

const useStyles = makeStyles({
  headerContainer: {
    height: 59,
    background: "#ededed",
    padding: "10px 16px",
    display: "flex",
    gridTemplateColumns: "1fr 1fr",
    boxSizing: "border-box",
    // alignItems: "center"
  },
  iconsContainer: {
    justifySelf: "end",
    height: "100%",
    display: "grid",
    gridGap: "3px",
    gridTemplateColumns: "1fr 1fr 1fr",
    alignContent: "center",
    "& button": {
      color: "#919191",
    },
  },
});

function SidebarHeader() {
  const classes = useStyles();
  return (
    <div className={classes.headerContainer}>
      <div style={{ flexGrow: 1 }}>
        <Avatar
          style={{ cursor: "pointer" }}
          alt="Remy Sharp"
          src="http://placeimg.com/640/480/abstract"
        />
      </div>
      <div className={classes.iconsContainer}>
        <IconButton>
          <DataUsageIcon />
        </IconButton>
        <IconButton>
          <ChatIcon />
        </IconButton>
        <IconButton>
          <MoreVertIcon />
        </IconButton>
      </div>
    </div>
  );
}

export default SidebarHeader;
