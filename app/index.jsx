import React from 'react'
import { render } from 'react-dom'
import App from './App'

import { Provider } from 'react-redux'
import { createStore } from 'redux'

const reducer = (state, { type }) => {
  switch (type) {
    case 'auth/authenticated':
      return {
        ...state,
        auth: { ...state.auth, isAuthenticated: true }
      }
    default:
      return state
  }
}

const initialState = {
  auth: {
    isAuthenticated: false
  },
  staff: {},
  employer: {}
}

const store = createStore(reducer, initialState)

render(
  <Provider store={store}><App /></Provider>,
  document.getElementById('app')
)

// Enable HMR, not RHL
if (process.env.NODE_ENV === 'development' && module.hot) {
  module.hot.accept('./App', () => {
    render(
      <Provider store={store}><App /></Provider>,
      document.getElementById('app')
    )
  })
}
