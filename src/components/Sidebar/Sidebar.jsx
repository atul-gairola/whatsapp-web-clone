import React, { useState } from "react";

import SidebarHeader from "./components/SidebarHeader";
import SidebarSearch from "./components/SidebarSearch";
import ChatsWrapper from "./components/ChatsWrapper";
import UserProfile from "./components/UserProfile";
import { useAuth } from "../../contexts/AuthContext";

function Sidebar() {
  const [profileOpen, setProfileOpen] = useState(false);
  const { currentUser } = useAuth();

  const handleProfileOpen = () => {
    setProfileOpen(true);
  };

  const handleProfileClose = () => {
    setProfileOpen(false);
  };

  return (
    <div style={{ position: "relative", height: "100%" }}>
      {profileOpen && <UserProfile handleProfileClose={handleProfileClose} />}
      <SidebarHeader handleProfileOpen={handleProfileOpen} />
      <SidebarSearch />
      <ChatsWrapper chats={currentUser.chats} />
    </div>
  );
}

export default Sidebar;
