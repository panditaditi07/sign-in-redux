import React from "react";
import { Redirect, Route } from "react-router-dom";
// import { withRouter } from "react-router-dom";

const ProtectedRoute = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(props) => {
        return rest.isLoggedIn ? <Component {...props} /> : <Redirect to="/" />;
      }}
    />
  );
};

export default ProtectedRoute;
// export default withRouter(ProtectedRoute);
