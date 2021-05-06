import React from "react";
import { makeStyles } from "@material-ui/core";

import InitialDisplayBox from "./components/InitialDisplayBox";
import Sidebar from "./components/Sidebar/Sidebar";
import Chatbox from "./components/Chatbox/Chatbox";

import { useChatboxContext } from "./contexts/ChatboxContext";

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
    "@media(max-width: 1396px)": {
      margin: 0,
      height: "100vh",
    },
  },
});

function App() {
  const classes = useStyles();
  const { chatboxId } = useChatboxContext();

  console.log(chatboxId);

  return (
    <div className={classes.main_container}>
      <section>
        <Sidebar />
      </section>
      <section>
        {/* <InitialDisplayBox /> */}
        <Chatbox />
      </section>
    </div>
  );
}

export default App;
