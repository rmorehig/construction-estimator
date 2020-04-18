import gql from 'graphql-tag'
import { useQuery } from '@apollo/react-hooks'
import { useState } from 'react'

export const GET_PROVIDERS = gql`
  query getProviders {
    provider {
      id
      entity {
        id
        code
        name
        email
        phone
        city
      }
    }
    provider_aggregate {
      aggregate {
        count
      }
    }
  }
`

export const useGetProviders = () => {
  const [providers, setProviders] = useState([])
  const [count, setCount] = useState(0)
  const { loading } = useQuery(GET_PROVIDERS, {
    onCompleted: data => {
      setProviders(data.provider)
      setCount(data.provider_aggregate.aggregate.count)
    },
    fetchPolicy: 'cache-and-network',
  })
  return {
    providers,
    count,
    loading,
  }
}
