import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from 'react-router-dom';
import Layout from 'components/Layout';
import { NotificationsProvider } from 'context/notifications';
import ProvidersList from 'views/ProvidersList';
import { ThemeProvider } from 'styled-components';
import theme from 'theme';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <NotificationsProvider>
        <Router>
          <Layout>
            <Switch>
              <Redirect exact from="/" to="/providers" />
              <Route exact path="/providers">
                <ProvidersList />
              </Route>
            </Switch>
          </Layout>
        </Router>
      </NotificationsProvider>
    </ThemeProvider>
  );
}

export default App;
