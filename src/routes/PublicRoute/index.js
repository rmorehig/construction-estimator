import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import { useAuth } from 'hooks/useAuth';

export const PublicRoute = ({ component: Component, ...rest }) => {
  const { isAuthenticated } = useAuth();

  return (
    <Route
      render={(props) =>
        isAuthenticated === false ? (
          <Component {...props} />
        ) : (
          <Redirect to="/entities" />
        )
      }
      {...rest}
    />
  );
};
