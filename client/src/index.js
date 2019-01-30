import React from 'react'
import { render } from 'react-dom'
import 'semantic-ui-css/semantic.css'

// app specific imports
import Root from './containers/Root'
import configureStore, { history } from './store/configureStore'

const store = configureStore(window.__INITIAL_STATE__)

const renderApp = () =>
  render(
    <Root 
      store={store}
      history={history} />,
    document.getElementById('root')
  )

if (process.env.NODE_ENV !== 'production' && module.hot) {
  module.hot.accept('./App', renderApp)
}

renderApp()