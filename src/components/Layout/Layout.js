import React from "react";
import Sidebar from "../Sidebar/Sidebar";
import Header from "../Header/Header";

import "./layout.scss";

const Layout = ({ children }) => {
  return (
    <main className="layout">
      <Header />
      <Sidebar />
      <div className="main-content">{children}</div>
    </main>
  );
};

export default Layout;
