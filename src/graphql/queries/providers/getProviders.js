import gql from 'graphql-tag'
import { useQuery } from '@apollo/react-hooks'
import { useState } from 'react'
import { ENTITY_FRAGMENT } from 'graphql/fragments/entity'
import usePagination from 'hooks/use-pagination'

export const GET_PROVIDERS = gql`
  query getProviders($limit: Int, $offset: Int) {
    provider(limit: $limit, offset: $offset) {
      id
      entity {
        ...entityFields
      }
    }
    provider_aggregate {
      aggregate {
        count
      }
    }
  }
  ${ENTITY_FRAGMENT}
`

export const useGetProviders = () => {
  const {
    count,
    limit,
    offset,
    nextPage,
    previousPage,
    setCount,
  } = usePagination()
  const [providers, setProviders] = useState([])
  const { loading } = useQuery(GET_PROVIDERS, {
    variables: {
      limit,
      offset,
    },
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
    nextPage,
    previousPage,
  }
}
