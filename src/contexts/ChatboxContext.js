import React, { useContext, useState, createContext } from "react";

const ChatboxContext = createContext();

export function useChatboxContext() {
  return useContext(ChatboxContext);
}

export function ChatboxContextProvider({ children }) {
  const [currentChatbox, setCurrentChatbox] = useState();

  const updateChatbox = ({ id, name, img }) => {
    setCurrentChatbox({
      id,
      name,
      img,
    });
  };

  return (
    <ChatboxContext.Provider value={{ currentChatbox, updateChatbox }}>
      {children}
    </ChatboxContext.Provider>
  );
}
