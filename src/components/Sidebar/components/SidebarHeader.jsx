import React, { useState, useRef, useEffect } from "react";
import { makeStyles, IconButton } from "@material-ui/core";
import ChatIcon from "@material-ui/icons/Chat";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import DataUsageIcon from "@material-ui/icons/DataUsage";
import Avatar from "@material-ui/core/Avatar";
import ClickAwayListener from "@material-ui/core/ClickAwayListener";
import Grow from "@material-ui/core/Grow";
import Paper from "@material-ui/core/Paper";
import Popper from "@material-ui/core/Popper";
import MenuItem from "@material-ui/core/MenuItem";
import MenuList from "@material-ui/core/MenuList";

import { useAuth } from "../../../contexts/AuthContext";
import _ from "lodash";

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
    "& .MuiIconButton-root": {
      "&:hover": {
        backgroundColor: "transparent",
      },
    },
  },
  menu: {
    "& > li": {
      paddingRight: 58,
      paddingLeft: 24,
      // paddingTop: 13,
      fontSize: 14.5,
      color: "#4a4a4a",
      height: 40,
    },
  },
  popper: {
    zIndex: 1,
    left: "-55px !important",
    top: "5px !important",
  },
});

function SidebarHeader({ handleProfileOpen }) {
  const { signout, currentUser } = useAuth();

  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const anchorRef = useRef(null);

  const handleToggle = () => {
    setOpen((prev) => !prev);
  };

  const handleClose = (event) => {
    // if (anchorRef.current && anchorRef.current.contains(event.target)) {
    //   return;
    // }

    setOpen(false);
  };

  function handleListKeyDown(event) {
    if (event.key === "Tab") {
      event.preventDefault();
      setOpen(false);
    }
  }

  const handleMoreFunction = (fun1, fun2) => {
    fun1();
    fun2();
  };

  // return focus to the button when we transitioned from !open -> open
  const prevOpen = useRef(open);

  useEffect(() => {
    if (prevOpen.current === true && open === false) {
      anchorRef.current.focus();
    }

    prevOpen.current = open;
  }, [open]);

  return (
    <div className={classes.headerContainer}>
      <div style={{ flexGrow: 1 }}>
        <Avatar
          onClick={handleProfileOpen}
          style={{ cursor: "pointer" }}
          alt={_.startCase(currentUser.name)}
          src={currentUser.img}
        />
      </div>
      <div className={classes.iconsContainer}>
        <IconButton>
          <DataUsageIcon />
        </IconButton>
        <IconButton>
          <ChatIcon />
        </IconButton>
        <IconButton
          ref={anchorRef}
          aria-controls={open ? "menu-list-grow" : undefined}
          aria-haspopup="true"
          onClick={handleToggle}
        >
          <MoreVertIcon />
        </IconButton>
        <Popper
          open={open}
          anchorEl={anchorRef.current}
          role={undefined}
          transition
          disablePortal
          className={classes.popper}
        >
          {({ TransitionProps, placement }) => (
            <Grow
              {...TransitionProps}
              style={{
                transformOrigin: "right top",
              }}
            >
              <Paper
                style={{
                  boxShadow:
                    "0 2px 5px 0 rgba(0,0,0,.26),0 2px 10px 0 rgba(0,0,0,.16)",
                }}
              >
                <ClickAwayListener onClickAway={handleClose}>
                  <MenuList
                    autoFocusItem={open}
                    id="menu-list-grow"
                    onKeyDown={handleListKeyDown}
                    className={classes.menu}
                  >
                    <MenuItem onClick={handleClose}>New group</MenuItem>
                    <MenuItem
                      onClick={() => {
                        handleProfileOpen();
                        handleClose();
                      }}
                    >
                      Profile
                    </MenuItem>
                    <MenuItem onClick={handleClose}>Archived</MenuItem>
                    <MenuItem onClick={handleClose}>Starred</MenuItem>
                    <MenuItem onClick={handleClose}>Settings</MenuItem>
                    <MenuItem onClick={signout}>Log out</MenuItem>
                  </MenuList>
                </ClickAwayListener>
              </Paper>
            </Grow>
          )}
        </Popper>
      </div>
    </div>
  );
}

export default SidebarHeader;
