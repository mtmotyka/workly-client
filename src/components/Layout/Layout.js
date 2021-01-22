import React from "react";
import { Link } from "react-router-dom";
import Sidebar from "../Sidebar/Sidebar";

import "./layout.scss";

const Layout = ({ children }) => {
  return (
    <main className="layout">
      <Sidebar />
      <Link to="/login">LOGIN</Link>
      <section className="layout__content">{children}</section>
    </main>
  );
};

export default Layout;
