import React from "react";

import SidebarHeader from "./components/SidebarHeader";
import SidebarSearch from "./components/SidebarSearch";
import ChatsWrapper from "./components/ChatsWrapper";

function Sidebar() {
  return (
    <div  >
      <SidebarHeader />
      <SidebarSearch />
      <ChatsWrapper />
    </div>
  );
}

export default Sidebar;
