import React, { Component } from "react";

import "./layout.scss";
import Sidebar from "../Sidebar/Sidebar";

class Layout extends Component {
  render() {
    const { children } = this.props;

    return (
      <main className="layout">
        <Sidebar />
        <section className="layout__content">{children}</section>
      </main>
    );
  }
}

export default Layout;
