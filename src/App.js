import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom'
import Layout from 'components/Layout'
import Providers from 'views/providers'
import Customers from 'views/customers'
import ProvidersNew from 'views/providers-new'
import CustomersNew from 'views/customers-new'
import { NotificationsProvider } from 'context/notifications'

function App() {
  return (
    <NotificationsProvider>
      <Router>
        <Layout>
          <Switch>
            <Redirect exact from="/" to="/providers" />
            <Route exact path="/providers">
              <Providers />
            </Route>
            <Route exact path="/providers/new">
              <ProvidersNew />
            </Route>
            <Route exact path="/customers">
              <Customers />
            </Route>
            <Route exact path="/customers/new">
              <CustomersNew />
            </Route>
          </Switch>
        </Layout>
      </Router>
    </NotificationsProvider>
  )
}

export default App
