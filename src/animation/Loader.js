import React from 'react'
import Lottie from 'react-lottie'
import Animation from './data'

/**
 * Loader component while waiting the api response.
 *
 * @param {Number} height
 * @param {Number} width
 * @param {String} animation // optional. default: CircleLoader
 * @param {String} classes // optional
 * @returns {Component}
 *
 */
function Loader ({
  height,
  width,
  animation,
  classes
}) {
  /**
   * Default options define for eact lottie.
   */
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animation
      ? Animation[animation]
      : Animation.CircleLoader,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  }

  return (
    <div
      className={`is-flex align ${classes || classes}`}
      style={{ height: '50%' }}
    >
      <Lottie
        options={defaultOptions}
        height={height}
        width={width}
      />
    </div>
  )
}

export default Loader
