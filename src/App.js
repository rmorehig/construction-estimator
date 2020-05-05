import React from 'react';
import { Switch, Redirect } from 'react-router-dom';
import { NotificationsProvider } from 'context/notifications';
import { PublicRoute } from 'routes/PublicRoute';
import { PrivateRoute } from 'routes/PrivateRoute';
import Entities from 'views/Entities';
import Login from 'views/Login';
import ProviderModal from 'views/ProviderModal';
import CustomerModal from 'views/CustomerModal';

function App() {
  return (
    <NotificationsProvider>
      <Switch>
        <PublicRoute exact path="/" component={Login} />
        <PrivateRoute exact path="/dashboard" component={Entities} />
        <PrivateRoute exact path="/resources" component={Entities} />
        <PrivateRoute exact path="/entities" component={Entities} />
        <PrivateRoute exact path="/calendar" component={Entities} />
        <PrivateRoute exact path="/bids" component={Entities} />
        <PrivateRoute exact path="/constructions" component={Entities} />
        <PrivateRoute exact path="/team" component={Entities} />
        <PrivateRoute
          exact
          path="/entities/providers/new"
          component={ProviderModal}
        />
        <PrivateRoute
          exact
          path="/entities/customers/new"
          component={CustomerModal}
        />
        <Redirect to="/dashboard" />
      </Switch>
    </NotificationsProvider>
  );
}

export default App;
