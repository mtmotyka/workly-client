import React from "react";
import Sidebar from "../Sidebar/Sidebar";

import "./layout.scss";

const Layout = ({ children }) => {
  return (
    <main className="layout">
      <Sidebar />
      <section className="layout__content">{children}</section>
    </main>
  );
};

export default Layout;
