import React from 'react';
import { Switch, Redirect } from 'react-router-dom';
import { NotificationsProvider } from 'context/notifications';
import { PublicRoute } from 'routes/PublicRoute';
import { PrivateRoute } from 'routes/PrivateRoute';
import Entities from 'views/Entities';
import EntityModal from 'views/EntityModal';
import Login from 'views/Login';

function App() {
  return (
    <NotificationsProvider>
      <Switch>
        <PublicRoute exact path="/" component={Login} />
        <PrivateRoute exact path="/entities" component={Entities} />
        <PrivateRoute exact path="/entities/new" component={EntityModal} />
        <Redirect to="/" />
      </Switch>
    </NotificationsProvider>
  );
}

export default App;
