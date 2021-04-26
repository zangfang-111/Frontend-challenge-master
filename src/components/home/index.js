import React, { useState } from 'react'

import { useQuery } from '@apollo/client'
import { GET_POKEMONS } from '../../services/queries'

import { notification } from '../common/Notification'
import Loader from '../../animation/Loader'

import List from './list'
import Details from './details'

/**
 * Main page component which include left pokemons list and pagination
 * and right details section.
 *
 * @returns {Component}
 */
function Home () {
  const [page, setPage] = useState(1)
  const [active, setActive] = useState(0)

  // fetch pokemons query
  const { data, loading, error } = useQuery(GET_POKEMONS, { variables: { num: page * 10 } })

  // exception handle if the data fetch is failed.
  if (error) {
    notification('error', 'Graphql Error!')
    return
  }

  // the loading section when loading is true
  if (loading) {
    return (
      <div className='home'>
        <Loader width={200} height={100} />
      </div>
    )
  }

  // the prev butto action
  function isPrev () {
    const prev = page === 0 ? 0 : page - 1
    setPage(prev)
  }

  // the next button action
  function isNext () {
    const next = page + 1
    setPage(next)
  }

  // page render data with last 10 element sof pokemons
  function getRenderData () {
    if (page === 1) {
      return data.pokemons
    } else {
      return data.pokemons.slice(Math.max(data.pokemons.length - 10, 1))
    }
  }

  return (
    <div className='is-flex flex-center align home'>
      <div className='container is-flex'>
        <List
          data={getRenderData()}
          setPage={setPage}
          isPrev={isPrev}
          isNext={isNext}
          setActive={setActive}
        />
        <Details
          data={getRenderData()[active]}
        />
      </div>
    </div>
  )
}

export default Home
