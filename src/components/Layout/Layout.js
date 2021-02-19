import React from "react";
import Sidebar from "../Sidebar/Sidebar";
import Header from "../Header/Header";

import "./layout.scss";
import AddTaskPopup from "../AddTaskPopup/AddTaskPopup";

const Layout = ({ children }) => {
  return (
    <main className="flex h-screen max-h-screen bg-gray-100 overflow-hidden">
      <Header />
      <Sidebar />
      <div className="pb-4 pt-36 px-7 w-full max-h-screen overflow-auto">
        {children}
      </div>
      <AddTaskPopup />
    </main>
  );
};

export default Layout;
