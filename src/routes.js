import React, { useState, useEffect } from 'react'
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from 'react-router-dom'
import { compose } from 'recompose'
import { connect } from 'react-redux'

import Auth from './auth'
import Home from './components/home'

/**
 * Root routers define component.
 *
 * @param {String} token
 * @returns {*} routers
 *
 */
function Routes ({ token }) {
  const [auth, setAuth] = useState(true)

  /**
   * useEffect lifecycle for token status check.
   */
  useEffect(() => {
    /**
     * Check local storage token status for reload.
     */
    const localToken = window.localStorage.getItem('token')
    if (localToken !== 'null' && !!localToken) {
      setAuth(true)
    } else setAuth(false)

    /**
     * Redux store token capture for redirect to HOME.
     */
    if (token) setAuth(true)
  }, [token])

  /**
   * Login route for authentication check.
   *
   * @param {*} Component
   * @returns {*} Routers
   *
   */
  const LoginRoute = ({ component: Component }) => (
    !auth
      ? <Route component={Component} />
      : <Redirect to={{ pathname: '/' }} />
  )

  /**
   * Private route for authentication check.
   *
   * @param {*} props
   * @returns {*} Routers
   *
   */
  const PrivateRoute = (props) => (
    auth
      ? <Route {...props} component={props.component} />
      : <Redirect to={{ pathname: '/auth' }} />
  )

  return (
    <Router>
      <Switch>
        <LoginRoute exact path='/auth' component={() => <Auth />} />
        <PrivateRoute
          path='/'
          component={() => (
            <Switch>
              <Route path='/main' component={() => <Home />} />
              <Route
                path='/'
                component={() => (
                  <Redirect to={{ pathname: '/main' }} />
                )}
              />
            </Switch>
          )}
        />
      </Switch>
    </Router>
  )
}

/**
 * The function for get state of props.
 *
 * @param {*} state
 * @returns {*}
 *
 */
const mapStateToProps = state => ({
  token: state.getIn(['userReducer', 'token'])
})

/**
 * Export with wrap of compose and connect of redux features.
 */
export default compose(
  connect(mapStateToProps, null)
)(Routes)
