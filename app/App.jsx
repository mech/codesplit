import React, { Component } from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

import EmployerScreen from './employer/EmployerScreen'
import Login from './Login'

// For code splitting
import AsyncRoute from './AsyncRoute'
import AuthRoute from './AuthRoute'

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <ul>
            <li><Link to="/staff">Staff</Link></li>
            <li><Link to="/employer">Employer</Link></li>
          </ul>

          <Route exact path="/login" component={Login} />
          <AuthRoute path="/staff" component={(props) => <AsyncRoute props={props} loadingPromise={import("./staff/StaffScreen")} />} />
          <AuthRoute path="/employer" component={EmployerScreen} />
        </div>
      </Router>
    )
  }
}

export default App
