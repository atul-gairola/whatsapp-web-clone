import React from "react";

import SidebarHeader from "./SidebarHeader";
import SidebarSearch from "./SidebarSearch";
import ChatsWrapper from "./ChatsWrapper";

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
