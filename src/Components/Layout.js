import React from "react";
import Sidebar from "./Sidebar";
import MainContent from "./MainContent";

const Layout = () => (
  <div className="d-flex">
    <Sidebar/>
    <MainContent/>
  </div>
);

export default Layout;
