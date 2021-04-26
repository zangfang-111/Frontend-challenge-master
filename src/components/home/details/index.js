import React from 'react'

/**
 * The details component of selected item.
 *
 * @param {Object} data
 * @returns {Component}
 *
 */
function Details ({ data }) {
  return (
    <div className='details flex-column'>
      <div className='header is-flex flex-btn align'>
        <h1>{data.name}</h1>
        <h1>{`#${data.number}`}</h1>
      </div>
      <div className='content is-flex'>
        <img src={data.image} alt='Pokemon - Frontend Challenge Master' />
        <div className='flex-column'>
          <h3>{data.classification}</h3>
          <p>{`Height: ${data.height.maximum}`}</p>
          <p>{`Weight: ${data.weight.maximum}`}</p>
        </div>
      </div>
    </div>
  )
}

export default Details
