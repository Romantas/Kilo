/*
    This route redirect to chat if login user tries go to login page
*/

import React from 'react';

//Redux
import { useSelector } from 'react-redux';

//React router
import { Route, Redirect } from 'react-router-dom';

const PublicRoute = ({ component: Component, restricted, ...rest }) => {
  //redux selector
  const user = useSelector((state) => state.user);
  return (
    <Route
      {...rest}
      render={(props) =>
        user.email ? <Redirect to="/chat" /> : <Component {...props} />
      }
    />
  );
};

export default PublicRoute;
