import React from "react";
import { Route } from "react-router";

const PublicRoute: React.FC<any> = ({ component: Component, ...rest }) => {
  return <Route {...rest} render={(props:any) => <Component {...props} />} />;
};

export default PublicRoute;
