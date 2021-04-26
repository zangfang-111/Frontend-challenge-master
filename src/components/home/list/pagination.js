import React from 'react'

/**
 * pagination component.
 *
 * @param {Function} setPage
 * @param {Function} isPrev
 * @param {Function} isNext
 *
 * @returns {Component}
 *
 */
function Pagination ({
  setPage,
  isPrev,
  isNext
}) {
  return (
    <div className='is-flex flex-btn align pagination'>
      <div className='is-flex align'>
        {[1, 2, 3, 4].map((num, k) => (
          <div
            className='page-btn num'
            onClick={() => setPage(num)}
            key={k}
          >
            {num}
          </div>
        ))}
      </div>
      <div className='is-flex align'>
        <div onClick={isPrev} className='page-btn'>
          Pref
        </div>
        <div onClick={isNext} className='page-btn'>
          Next
        </div>
      </div>
    </div>
  )
}

export default Pagination
