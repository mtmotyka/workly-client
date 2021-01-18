import React from "react";

import "./layout.scss";
import Sidebar from "../Sidebar/Sidebar";

const Layout = ({ children }) => {
  return (
    <main className="layout">
      <Sidebar />
      <section className="layout__content">{children}</section>
    </main>
  );
};

export default Layout;
