import React, { useContext, useState, createContext } from "react";

const ChatboxContext = createContext();

export function useChatboxContext() {
  return useContext(ChatboxContext);
}

export function ChatboxContextProvider({ children }) {
  const [chatboxId, setChatBoxId] = useState();

  const updateChatbox = (id) => {
    setChatBoxId(id);
  };

  return (
    <ChatboxContext.Provider value={{ chatboxId, updateChatbox }}>
      {children}
    </ChatboxContext.Provider>
  );
}
