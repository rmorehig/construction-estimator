import gql from 'graphql-tag'
import { useQuery } from '@apollo/react-hooks'
import { useState } from 'react'

export const GET_PROVIDERS = gql`
  query getProviders {
    providers: provider {
      id
      code
      name
      email
      phone
      city
    }
  }
`

export const useGetProviders = () => {
  const [providers, setProviders] = useState([])
  const { loading } = useQuery(GET_PROVIDERS, {
    onCompleted: data => {
      setProviders(data.providers)
    },
    fetchPolicy: 'cache-and-network',
  })
  return {
    providers,
    loading,
  }
}
