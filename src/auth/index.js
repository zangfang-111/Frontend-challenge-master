import React, { useState, useEffect } from 'react'
import { withRouter } from 'react-router-dom'
import { compose } from 'recompose'
import { connect } from 'react-redux'

import LoginForm from './form'
import Button from '../components/common/Button'
import { setToken } from '../services/user/actions'
import { notification } from '../components/common/Notification'

/**
 * Auth component which includes login form.
 *
 * @param {Function} setToken
 *
 * @returns {Component}
 *
 */
function Login ({ setToken }) {
  const [state, setState] = useState({
    email: '',
    password: ''
  })
  const [submitted, setSubmitted] = useState(false)

  /**
   * useEffect for cache API call status.
   * success: redirect to main. email: admin / password: admin
   * failed: will be show notification message
   */
  useEffect(() => {
    if (submitted) {
      const { email, password } = state
      if (email !== 'admin' || password !== 'admin') {
        notification(
          'error',
          'Your credential does not match! hint: admin / admin'
        )
      } else {
        setToken({ token: 'frontend-challenge-master-20210426' })
      }
      setSubmitted(false)
    }
  }, [submitted, setToken, state])

  /**
   * state change function with shallow copy of object.
   *
   * @param {String} name
   * @param {*} e
   */
  function onChange (name, e) {
    setState({
      ...state,
      [name]: e.target.value
    })
  }

  /**
   * Signin api cal function with submitted status management.
   */
  function isLogin () {
    const { email, password } = state
    if (!email || !password) {
      /**
       * implemented the validation with notification
       * but we can implement the validation with a red string under the input.
       * also email validation (format, fake domain, etc)
       * and password strength check should be implemented future.
       */
      notification(
        'error',
        'Please input your credential correctly!'
      )
    } else setSubmitted(true)
  }

  return (
    <div className='login is-flex flex-center align'>
      <div className='flex-column align flex-center'>
        <LoginForm onChange={onChange} state={state} />
        <Button
          name='Login'
          action={isLogin}
          isLoading={submitted}
        />
      </div>
    </div>
  )
}

/**
 * The function for actions dispatch.
 *
 * @param {*} dispatch
 * @returns {*}
 *
 */
const mapDispatchToProps = dispatch => ({
  setToken: params => {
    dispatch(setToken(params))
  }
})

/**
 * Export with wrap of compose and connect of redux features.
 */
export default compose(
  connect(null, mapDispatchToProps)
)(withRouter(Login))
