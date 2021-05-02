import React from "react";
import { makeStyles } from "@material-ui/core";

import InitialDisplayBox from "./components/InitialDisplayBox";
import Sidebar from "./components/Sidebar/Sidebar";

const useStyles = makeStyles({
  main_container: {
    width: "100%",
    maxWidth: "1396px",
    height: "calc(100vh - 40px)",
    margin: "20px auto 0 auto",
    boxShadow: "0 1px 1px 0 rgba(0,0,0,.06),0 2px 5px 0 rgba(0,0,0,.2)",
    background: "#fff",
    display: "grid",
    gridTemplateColumns: "30% 70%",
  },
});

function App() {
  const classes = useStyles();
  return (
    <div className={classes.main_container}>
      <section>
        <Sidebar />
      </section>
      <section>
        <InitialDisplayBox />
      </section>
    </div>
  );
}

export default App;
