import React, { useState } from "react";
import { makeStyles } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
// import ArrowBackIcon from "@material-ui/icons/ArrowBack";
// import { AnimatePresence, motion } from "framer-motion";

const useStyles = makeStyles({
  searchContainer: {
    background: "#f6f6f6",
    height: 49,
    position: "relative",
    padding: "7px 15px",
  },
  wrapper: {
    background: "#fff",
    borderRadius: "25px",
    width: "100%",
    height: "100%",
    // margin: "5px 10px"
    display: "grid",
    gridTemplateColumns: "auto 1fr",
    padding: "5px 13px",
    alignItems: "center",
    gridGap: "20px",
    "& input": {
      border: "none",
      marginTop: "2px",
    },
    "& input::placeholder": {
      fontSize: 15,
      color: "#919191",
      fontFamily: "Source Sans Pro",
      fontWeight: "300",
    },
  },
  searchButton: {
    background: "transparent",
    border: "none",
    marginRight: 10,
    display: "grid",
  },
});

function SidebarSearch() {
  const classes = useStyles();
  const [animate, setAnimate] = useState(true);

  return (
    <div className={classes.searchContainer}>
      <div className={classes.wrapper}>
        <button className={classes.searchButton}>
          <SearchIcon style={{ fontSize: 20, color: "#919191" }} />

          {/* {!animate && (
            <motion.div initial={{ opacity: 0 }} animate={{opacity: 1}} exit={{ opacity: 0 }}>
              <ArrowBackIcon
                style={{
                  fontSize: 30,
                  color: "#2196f3",
                }}
              />
            </motion.div>
          )} */}
        </button>
        <input
          autoComplete={"false"}
          onClick={() => setAnimate(!animate)}
          name="search"
          placeholder="Search people or groups"
        />
      </div>
    </div>
  );
}

export default SidebarSearch;
