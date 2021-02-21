import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import HomePage from "./views/Home/Home";
import LoginPage from "./views/LoginPage/LoginPage";
import RegisterPage from "./views/RegisterPage/RegisterPage";
import TasksListView from "./views/TasksListView/TasksListView";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Route path="/login" exact component={LoginPage} />
        <Route path="/register" exact component={RegisterPage} />
        <Route path="/" exact component={HomePage} />
        <Route path="/tasks-list" exact component={TasksListView} />
      </BrowserRouter>
    </div>
  );
};

export default App;
