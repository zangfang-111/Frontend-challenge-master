import React from 'react'
import Pagination from './pagination'

/**
 * pokemons list and pagination section.
 *
 * @param {Array} data
 * @param {Function} setPage
 * @param {Function} isPrev
 * @param {Function} isNext
 * @param {Function} setActive
 *
 * @returns {Component}
 *
 */
function Panel ({
  data,
  setPage,
  isPrev,
  isNext,
  setActive
}) {
  return (
    <div className='flex-column panel'>
      <div className='list flex-column'>
        {data.map((item, k) => (
          <div
            key={k}
            className='list-card is-flex align cursor'
            onClick={() => setActive(k)}
          >
            <img src={item.image} alt='Avatar - Frontend Challenge Master' />
            <strong>{item.number}</strong>
            <p>{item.name}</p>
          </div>
        ))}
      </div>
      <Pagination
        setPage={setPage}
        isPrev={isPrev}
        isNext={isNext}
      />
    </div>
  )
}

export default Panel
