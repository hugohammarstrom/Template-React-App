import React, { Component } from 'react'
import PropTypes from 'prop-types'

import { PersistGate } from 'redux-persist/integration/react'
import { Provider } from 'react-redux'
import { Route } from 'react-router'
import { ConnectedRouter } from 'react-router-redux'

import { Base } from "./../routes/index"


const routes = [
  {
    path: "/",
    exact: true,
    component: Base,
  }
]

class Navigation extends Component {
  render() {
    const navbarHeight = 64
    console.log(routes[0].component)
    return (
      <Provider store={this.props.store}>
        <PersistGate loading={null} persistor={this.props.persistor}>
          <ConnectedRouter history={this.props.history}>
            <div>
              <div style={{paddingTop: navbarHeight}}>
                {routes.map((route, index) => (<Route key={index} path={route.path} exact={route.exact} component={route.component}></Route>)) }
              </div>
            </div>
          </ConnectedRouter>
        </PersistGate>
      </Provider>
    )
  }
}

Navigation.propTypes = {
  store: PropTypes.object.isRequired
}

export default Navigation