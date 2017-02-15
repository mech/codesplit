import React, { Component, PropTypes } from 'react'
import auth from './auth'

class Login extends Component {
  constructor(props) {
    super(props)
    this.state = {
    }

    this.submit = this.submit.bind(this)
  }

  submit(e) {
    e.preventDefault()
    auth.login('mech@me.com', 'password')
  }

  render() {
    return (
      <form onSubmit={this.submit}>
        <input type="email" placeholder="Email" />
        <input type="password" placeholder="Passwords" />
        <input type="submit" value="Login"/>
      </form>
    )
  }
}

Login.propTypes = {
}

Login.defaultProps = {
}

export default Login
