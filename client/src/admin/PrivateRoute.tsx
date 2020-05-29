import * as React from "react";
import { Route, Redirect } from "react-router-dom";
import {fakeAuth} from "./Login";
/* PrivateRoute component definition */
const PrivateRoute = (props: any) => {
  // const fakeAuth = {
  //   isAuthenticated:true,
  // };
  const Component = props.component;
  return (
    <Route
      path={props.path}
      render={props =>
        fakeAuth.isAuthenticated === true ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{ pathname: "/login", state: { from: props.location } }}
          />
        )
      }
    />
  );
};

export default PrivateRoute;