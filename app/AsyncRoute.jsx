import React, { Component } from 'react'

class AsyncRoute extends Component {
  constructor(props) {
    super(props)
    this.state = { loaded: false }
  }

  componentDidMount() {
    this.props.loadingPromise.then(module => {
      this.component = module.default // due to CommonJS
      this.setState({ loaded: true })
    })
  }

  render() {
    if (this.state.loaded) {
      return <this.component {...this.props.props} />
    } else {
      return <p>Loading...</p>
    }
  }
}

export default AsyncRoute
