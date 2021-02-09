import React, { useContext } from "react";
import { Route, Redirect } from "react-router-dom";

import Context from "../Context/Authentication/ContextLogin";

const PrivateRoutes = ({ component: Component, ...rest }) => {
  const { token } = useContext(Context);

  return <Route {...rest} render={() => (token ? <Component {...rest} /> : <Redirect to="/signin" />)} />;
};

export default PrivateRoutes;