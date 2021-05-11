import React from "react";

import SidebarHeader from "./components/SidebarHeader";
import SidebarSearch from "./components/SidebarSearch";
import ChatsWrapper from "./components/ChatsWrapper";
import UserProfile from "./components/UserProfile";

function Sidebar() {
  return (
    <div style={{ position: "relative", height: "100%" }}>
      <UserProfile />
      <SidebarHeader />
      <SidebarSearch />
      <ChatsWrapper />
    </div>
  );
}

export default Sidebar;
