import React, { Component } from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

import EmployerScreen from './employer/EmployerScreen'

// For code splitting
import AsyncRoute from './AsyncRoute'

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <ul>
            <li><Link to="/staff">Staff</Link></li>
            <li><Link to="/employer">Employer</Link></li>
          </ul>

          <Route path="/staff" component={(props) => <AsyncRoute props={props} loadingPromise={import("./staff/StaffScreen")} />} />
          <Route path="/employer" component={EmployerScreen} />
        </div>
      </Router>
    )
  }
}

export default App
