import gql from 'graphql-tag'
import { useQuery } from '@apollo/react-hooks'
import { useState } from 'react'
import { ENTITY_FRAGMENT } from 'graphql/fragments/entity'
import usePagination from 'hooks/use-pagination'

export const GET_CUSTOMERS = gql`
  query getProviders($limit: Int, $offset: Int) {
    customer(limit: $limit, offset: $offset) {
      id
      entity {
        ...entityFields
      }
    }
    customer_aggregate {
      aggregate {
        count
      }
    }
  }
  ${ENTITY_FRAGMENT}
`

export const useGetCustomers = () => {
  const {
    count,
    limit,
    offset,
    nextPage,
    previousPage,
    setCount,
  } = usePagination()
  const [customers, setCustomers] = useState([])
  const { loading } = useQuery(GET_CUSTOMERS, {
    variables: {
      limit: limit,
      offset: offset,
    },
    onCompleted: data => {
      setCustomers(data.customer)
      setCount(data.customer_aggregate.aggregate.count)
    },
    fetchPolicy: 'cache-and-network',
  })
  return {
    customers,
    count,
    loading,
    nextPage,
    previousPage,
  }
}
