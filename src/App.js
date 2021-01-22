import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import LoginPage from "./components/LoginPage/LoginPage";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Route path="/login" exact component={LoginPage} />
        <Route path="/" exact component={Layout} />
      </BrowserRouter>
    </div>
  );
};

export default App;
