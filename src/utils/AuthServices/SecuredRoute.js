import React from "react";
import { Route, Redirect } from "react-router-dom";

import { isLoggedIn } from "../../utils/AuthServices/AuthServices";

const SecuredRoute = ({ component: Component, auth, ...rest }) => (
  <Route
    {...rest}
    render={(props) =>
      isLoggedIn() === true ? (
        <Component {...props} />
      ) : (
        <Redirect to="/login" />
      )
    }
  />
);

export default SecuredRoute;
