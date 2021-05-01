import React from "react";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
  app: {
    width: "100vw",
    height: "100vh",
    overflow: "hidden",
    position: "relative",
    background: "linear-gradient(180deg, #009688 17%, #d6dbd8 17%)",
  },
  main_container: {
    width: "100%",
    maxWidth: "1396px",
    height: "100%",
    margin: "20px 0",
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    boxShadow: "0 1px 1px 0 rgba(0,0,0,.06),0 2px 5px 0 rgba(0,0,0,.2)",
    background: "#fff",
    display: "grid",
    gridTemplateColumns: "30% 70%"
  },
});

function App() {
  const classes = useStyles();
  return (
    <div className={classes.app}>
      <div className={classes.main_container}>
        <section>hj</section>
        <section>hello</section>
      </div>
    </div>
  );
}

export default App;
