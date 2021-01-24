import React from "react";
import Sidebar from "../Sidebar/Sidebar";
import Header from "../Header/Header";

import "./layout.scss";

const Layout = ({ children }) => {
  return (
    <main className="layout">
      <Header />
      <section className="layout__content">
        <Sidebar />
        {children}
      </section>
    </main>
  );
};

export default Layout;
