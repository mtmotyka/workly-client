import React from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Sidebar from "../Sidebar/Sidebar";
import Header from "../Header/Header";

import "./layout.scss";

const Layout = ({ children }) => {
  return (
    <main className="flex h-screen max-h-screen font-sans bg-gray-50 overflow-hidden">
      <Header />
      <Sidebar />
      <ToastContainer />
      <div className="pb-4 pt-36 px-7 w-full max-h-screen overflow-auto">
        {children}
      </div>
    </main>
  );
};

export default Layout;
