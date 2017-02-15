import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import auth from './auth'

const AuthRoute = ({ component: Component, ...restOfProps }) => (
  <Route
    {...restOfProps}
    render={props => (
      auth.isAuthenticated() ? (
        <Component {...props} />
      ) : (
        <Redirect to={{pathname: '/login'}} />
      )
    )}
  />
)

export default AuthRoute
