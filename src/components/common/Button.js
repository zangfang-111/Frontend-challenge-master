import React from 'react'

import Loader from '../../animation/Loader'

/**
 * Optimized button formatted with this project button style.
 *
 * @param {String} name
 * @param {Function} action
 * @param {Boolean} isLoading
 * @param {String} classes // optional. default: ''
 *
 * @return {Component}
 *
 */

function Button ({
  action,
  name,
  classes = '',
  isLoading
}) {
  return (
    <div
      className={`button is-flex align flex-center cursor ${classes}`}
      onClick={() => action()}
    >
      {isLoading
        ? <Loader width={50} height={50} animation='ButtonLoader' />
        : name}
    </div>
  )
}

export default Button
