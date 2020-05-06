import React from 'react';
import { Switch, Redirect } from 'react-router-dom';
import { NotificationsProvider } from 'context/notifications';
import { PublicRoute } from 'routes/PublicRoute';
import { PrivateRoute } from 'routes/PrivateRoute';
import Entities from 'views/Entities';
import Login from 'views/Login';
import Resources from 'views/Resources';
import ProviderDetails from 'views/ProviderDetails';
import CustomerDetails from 'views/CustomerDetails';
import { ModalProvider } from 'context/modals';

function App() {
  return (
    <NotificationsProvider>
      <ModalProvider>
        <Switch>
          <PublicRoute exact path="/" component={Login} />
          <PrivateRoute exact path="/dashboard" component={Entities} />
          <PrivateRoute exact path="/resources" component={Resources} />
          <PrivateRoute exact path="/entities" component={Entities} />
          <PrivateRoute exact path="/calendar" component={Entities} />
          <PrivateRoute exact path="/bids" component={Entities} />
          <PrivateRoute exact path="/constructions" component={Entities} />
          <PrivateRoute exact path="/team" component={Entities} />
          <PrivateRoute
            exact
            path="/entities/providers/:id"
            component={ProviderDetails}
          />
          <PrivateRoute
            exact
            path="/entities/customers/:id"
            component={CustomerDetails}
          />
          <Redirect to="/dashboard" />
        </Switch>
      </ModalProvider>
    </NotificationsProvider>
  );
}

export default App;
