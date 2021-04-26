import React from 'react'
import Input from '../components/common/Input'

/**
 * Login form component which include email and password inputs.
 *
 * @param {Function} onChange
 * @param {Object} state
 *
 * @returns {Component}
 *
 */
function LoginForm ({ onChange, state }) {
  return (
    <>
      <Input
        placeholder='Email'
        onChange={onChange}
        value={state.email}
        name='email'
      />
      <Input
        placeholder='Password'
        onChange={onChange}
        value={state.password}
        name='password'
        type='password'
      />
    </>
  )
}

export default LoginForm
