import PropTypes from 'prop-types'
import React, { Component } from 'react'
import { Route, Switch } from 'react-router'
import { BrowserRouter as Router } from 'react-router-dom'

// import {
//   ConnectedRouter as Router
// } from 'connected-react-router';

import Home from './Home'
import NotFound from './NotFound'

class App extends Component {
  render () {
    const { history } = this.props

    return <Router history={history}>
      <div class="app-container">
        <Switch>
          <Route exact path="/" render={() => (<Home />)} />
          <Route render={() => (<NotFound />)} />
        </Switch>
      </div>
    </Router>
  }
}

App.propTypes = {
  history: PropTypes.object.isRequired
}

export default App
