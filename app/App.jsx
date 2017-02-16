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

import styled from 'styled-components'

const Dialog = styled.div`
  color: blue;
  font-family: Helvetica;
  border: 2px solid tomato;
  padding: 10px;
  width: 500px;
  display: ${props => props.isOpen ? 'block' : 'none'};
`

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isOpen: false
    }

    this.showHide = this.showHide.bind(this)
  }

  showHide() {
    this.setState({
      isOpen: !this.state.isOpen
    })
  }

  render() {
    console.log(this.props);
    return (
      <Router>
        <div>
          <ul>
            <li><Link to="/dashboard">Dashboard</Link></li>
          </ul>

          <button onClick={this.showHide}>Show/Hide</button>
          <Dialog isOpen={this.state.isOpen}>Hello</Dialog>

          <Route exact path="/login" component={Login} />
          <AuthRoute path="/dashboard" component={(props) => <AsyncRoute props={props} loadingPromise={import("./splits/" + this.props.role)} />} />
        </div>
      </Router>
    )
  }
}

export default connect(state => state.auth)(App)
