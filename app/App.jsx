import React, { Component } from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'
import { connect } from 'react-redux'

import Login from './Login'

// For code splitting
import AsyncRoute from './AsyncRoute'
import AuthRoute from './AuthRoute'

class App extends Component {
  render() {
    console.log(this.props);
    return (
      <Router>
        <div>
          <ul>
            <li><Link to="/dashboard">Dashboard</Link></li>
          </ul>

          <Route exact path="/login" component={Login} />
          <AuthRoute path="/dashboard" component={(props) => <AsyncRoute props={props} loadingPromise={import("./splits/" + this.props.role)} />} />
        </div>
      </Router>
    )
  }
}

export default connect(state => state.auth)(App)
