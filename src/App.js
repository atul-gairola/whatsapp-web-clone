import React from "react";
import { makeStyles } from "@material-ui/core";

import InitialDisplayBox from "./components/InitialDisplayBox";
import Sidebar from "./components/Sidebar/Sidebar";
import Chatbox from "./components/Chatbox/Chatbox";
import Login from "./components/Login";

import { useChatboxContext } from "./contexts/ChatboxContext";
import { useAuth } from "./contexts/AuthContext";

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
  const { currentChatbox } = useChatboxContext();
  const { currentUser, signout } = useAuth();

  console.log(currentChatbox);
  console.log(currentUser);

  return !currentUser ? (
    <Login />
  ) : (
    <div className={classes.main_container}>
      {/* <button onClick={signout}>Signout</button> */}
      <section>
        <Sidebar />
      </section>
      <section>
        {currentChatbox ? (
          <Chatbox
            name={currentChatbox.name}
            img={currentChatbox.img}
            chatboxId={currentChatbox.chatboxId}
          />
        ) : (
          <InitialDisplayBox />
        )}
      </section>
    </div>
  );
}

export default App;
