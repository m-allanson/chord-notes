// @flow
import React, { Component } from 'react'

import history from '../../utils/history'
import routes from '../../utils/routes'
import Nav from '../Nav'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = { pathname: history.location.pathname }
    history.listen(this.pathnameListener)
  }

  pathnameListener = location => {
    if (location.pathname !== this.state.pathname) {
      this.setState({ pathname: location.pathname })
    }
  }

  render() {
    const RouteComponent = routes[this.state.pathname]
    return (
      <div>
        <Nav />
        <RouteComponent />
      </div>
    )
  }
}

export default App
