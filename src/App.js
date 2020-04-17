import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom'
import Layout from 'components/Layout'
import Dashboard from 'components/Dashboard'
import Providers from 'views/providers'

function App() {
  return (
    <Router>
      <Layout>
        <Switch>
          <Redirect exact from="/" to="/providers" />
          <Route exact path="/dashboard">
            <Dashboard />
          </Route>
          <Route exact path="/providers">
            <Providers />
          </Route>
        </Switch>
      </Layout>
    </Router>
  )
}

export default App
