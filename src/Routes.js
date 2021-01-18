import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import LoginPage from "./components/LoginPage/LoginPage";

const Routes = () => {
  return (
    <BrowserRouter>
      <Route path="/login" exact component={LoginPage} />
      <Route path="/" exact component={Layout} />
    </BrowserRouter>
  );
};

export default Routes;
