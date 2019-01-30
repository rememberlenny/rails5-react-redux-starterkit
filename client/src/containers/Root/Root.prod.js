import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Provider } from 'react-redux'
import App from '../../App'
// import DevTools from '../DevTools'

export default class Root extends Component {
  render() {
    const { store, routes, type, renderProps } = this.props

    return (
      <Provider store={store}>
        <App />
      </Provider>
    )
  }
}

Root.propTypes = {
  store: PropTypes.object.isRequired,
  routes: PropTypes.node.isRequired
}