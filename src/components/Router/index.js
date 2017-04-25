// @flow
import React, { Component } from 'react'
import history from '../../utils/history'
import routes from '../../utils/routes'

class Router extends Component {
  constructor(props) {
    super(props)
    this.state = { pathname: history.location.pathname }
    history.listen(location => {
      const state = { pathname: location.pathname }
      this.setState(state)
    })
  }

  render = () => {
    const RouteComponent = routes[this.state.pathname]
    return <RouteComponent />
  }
}

export default Router
