import { gql } from '@apollo/client'

export const GET_POKEMONS = gql`
  query data ($num: Int!) {
    pokemons(first: $num) {
      id
      number
      name
      image
      classification
      weight {
        minimum
        maximum
      }
      height {
        minimum
        maximum
      }
    }
  }
`
