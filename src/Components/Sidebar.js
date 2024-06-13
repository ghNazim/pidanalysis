import React from "react";
import Search from "./sidebar/Search";
import ErrorTab from "./sidebar/ErrorTab";
import Loading from "./Loading";

function Sidebar() {
  return (
    <div
      className="bg-light sidebar"
      style={{ width: "30%", height: "100vh", overflowY: "auto" }}
    >
      <Search />
      <ErrorTab />
    </div>
  );
}

export default Sidebar;
