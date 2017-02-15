import React from 'react'
import { render } from 'react-dom'
import App from './App'

import { Provider } from 'react-redux'
import { createStore, combineReducers } from 'redux'

const auth = (state = { isAuthenticated: false, role: 'EmployerScreen' }, { type, payload }) => {
  switch (type) {
    case 'auth/authenticated':
      return { ...state, isAuthenticated: true, role: payload }
    default:
      return state
  }
}

const reducer = (state, { type }) => {
  switch (type) {
    case 'auth/authenticated':
      // This does not work as it is mutable
      // state.auth.isAuthenticated = true
      // return state
      // --end
      return {
        ...state,
        auth: { ...state.auth, isAuthenticated: true }
      }
    default:
      return state
  }
}

// const initialState = {
//   auth: {
//     isAuthenticated: false
//   },
//   staff: {},
//   employer: {}
// }

const rootReducer = combineReducers({
  auth
})

const store = createStore(rootReducer)

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app')
)

// Enable HMR, not RHL
if (process.env.NODE_ENV === 'development' && module.hot) {
  module.hot.accept('./App', () => {
    render(
      <Provider store={store}>
        <App />
      </Provider>,
      document.getElementById('app')
    )
  })
}
