import React from "react";
import { Redirect, Route } from "react-router-dom";
import FakeAuthService from "./FakeAuthService";

const PrivateRoute = ({ component, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      FakeAuthService.isAuthenticated() ? (
        <Route component={component} {...props} />
      ) : (
        <Redirect
          to={{
            pathname: "/login",
            state: { from: props.location }
          }}
        />
      )
    }
  />
);

export default PrivateRoute;
