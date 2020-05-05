import React from 'react';
import { Switch, Redirect } from 'react-router-dom';
import { NotificationsProvider } from 'context/notifications';
import { PublicRoute } from 'routes/PublicRoute';
import { PrivateRoute } from 'routes/PrivateRoute';
import Entities from 'views/Entities';
import Login from 'views/Login';
import ProviderModal from 'views/ProviderModal';
import CustomerModal from 'views/CustomerModal';
import MaterialModal from 'views/MaterialModal';
import Resources from 'views/Resources';
import ProviderDetails from 'views/ProviderDetails';

function App() {
  return (
    <NotificationsProvider>
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
          path="/entities/providers/new"
          component={ProviderModal}
        />
        <PrivateRoute
          exact
          path="/entities/customers/new"
          component={CustomerModal}
        />
        <PrivateRoute
          exact
          path="/resources/materials/new"
          component={MaterialModal}
        />
        <PrivateRoute
          exact
          path="/entities/providers/:id"
          component={ProviderDetails}
        />
        <Redirect to="/dashboard" />
      </Switch>
    </NotificationsProvider>
  );
}

export default App;
