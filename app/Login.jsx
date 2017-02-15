import React, { Component, PropTypes } from 'react'
import auth from './auth'
import { connect } from 'react-redux'

class Login extends Component {
  constructor(props) {
    super(props)
    this.state = {
    }

    this.submit = this.submit.bind(this)
  }

  submit(e) {
    e.preventDefault()
    auth.login('mech@me.com', 'password').then(data => {
      this.props.dispatch({type: 'auth/authenticated'})
    })
  }

  render() {
    console.log(this.props);
    return (
      <form onSubmit={this.submit}>
        <input type="email" placeholder="Email" />
        <input type="password" placeholder="Passwords" />
        <input type="submit" value="Login"/>
      </form>
    )
  }
}

export default connect()(Login)
