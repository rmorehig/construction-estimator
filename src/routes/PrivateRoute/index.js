import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import { useAuth } from 'hooks/useAuth';
import Layout from 'components/Layout';

export const PrivateRoute = ({ component: Component, ...rest }) => {
  const { isAuthenticated } = useAuth();

  return (
    <Route
      render={(props) =>
        isAuthenticated === true ? (
          <Layout>
            <Component {...props} />
          </Layout>
        ) : (
          <Redirect to="/" />
        )
      }
      {...rest}
    />
  );
};
