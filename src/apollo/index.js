import { ApolloClient } from '@apollo/client'
import { InMemoryCache } from 'apollo-cache-inmemory'

/**
 * Apollo client configration with uri and cache.
 */
const client = new ApolloClient({
  cache: new InMemoryCache(),
  uri: 'https://graphql-pokemon2.vercel.app/'
})

export default client
