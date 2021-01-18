import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import LoginPage from "../LoginPage/LoginPage";

import "./layout.scss";
import Sidebar from "../Sidebar/Sidebar";

const Layout = ({ children }) => {
  return (
    <main className="layout">
      <BrowserRouter>
        <Route path="/login" exact component={LoginPage} />
      </BrowserRouter>
      <Sidebar />
      <section className="layout__content">{children}</section>
    </main>
  );
};

export default Layout;
