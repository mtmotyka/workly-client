import React, { useState, useEffect } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import HomePage from "./views/Home/Home";
import LoginPage from "./views/LoginPage/LoginPage";
import RegisterPage from "./views/RegisterPage/RegisterPage";
import TasksListView from "./views/TasksListView/TasksListView";
import ErrorPage from "./views/ErrorPage/ErrorPage";
import SecuredRoute from "./utils/AuthServices/SecuredRoute";
import { isLoggedIn } from "./utils/AuthServices/AuthServices";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route path="/login" exact component={LoginPage} />
          <Route path="/register" exact component={RegisterPage} />
          <SecuredRoute
            path="/"
            exact
            component={HomePage}
            auth={isLoggedIn()}
          />
          <SecuredRoute
            path="/tasks-list"
            exact
            component={TasksListView}
            auth={isLoggedIn()}
          />
          <Route component={ErrorPage} />
        </Switch>
      </BrowserRouter>
    </div>
  );
};

export default App;
