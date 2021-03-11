import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import HomePage from "./views/Home/Home";
import LoginPage from "./views/LoginPage/LoginPage";
import RegisterPage from "./views/RegisterPage/RegisterPage";
import TasksListView from "./views/TasksListView/TasksListView";
import ErrorPage from "./views/ErrorPage/ErrorPage";
import SecuredRoute from "./utils/AuthServices/SecuredRoute";
import EditProfilePage from "./views/EditProfilePage/EditProfilePage";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route path="/login" exact component={LoginPage} />
          <Route path="/register" exact component={RegisterPage} />
          <SecuredRoute path="/" exact component={HomePage} />
          <SecuredRoute path="/tasks-list" exact component={TasksListView} />
          <SecuredRoute
            path="/user-settings"
            exact
            component={EditProfilePage}
          />
          <SecuredRoute
            path="/project-settings"
            exact
            component={EditProfilePage}
          />
          <Route component={ErrorPage} />
        </Switch>
      </BrowserRouter>
    </div>
  );
};

export default App;
