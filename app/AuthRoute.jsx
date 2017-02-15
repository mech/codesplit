import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import auth from './auth'

// From the props, take out "component" and assigned to "Component" variable, then
// store the rest of the props into "restOfProps"
const AuthRoute = ({ component: Component, ...restOfProps }) => {
  console.log(restOfProps);
  return <Route
    {...restOfProps}
    render={props => (
      restOfProps.isAuthenticated ? (
        <Component {...props} />
      ) : (
        <Redirect to={{pathname: '/login'}} />
      )
    )}
  />
}

export default connect(state => state.auth)(AuthRoute)
