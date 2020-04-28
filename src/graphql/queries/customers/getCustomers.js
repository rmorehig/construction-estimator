import gql from 'graphql-tag'
import { useQuery } from '@apollo/react-hooks'
import { useState } from 'react'
import { ENTITY_FRAGMENT } from 'graphql/fragments/entity'
import useFilters from 'hooks/use-pagination'

export const GET_CUSTOMERS = gql`
  query getCustomers(
    $limit: Int
    $offset: Int
    $name: String
    $code: String
    $email: String
    $phone: String
    $city: String
    $country: String
  ) {
    customer(
      limit: $limit
      offset: $offset
      where: {
        entity: {
          name: { _ilike: $name }
          code: { _ilike: $code }
          email: { _ilike: $email }
          phone: { _ilike: $phone }
          city: { _ilike: $city }
          country: { _ilike: $country }
        }
      }
    ) {
      id
      entity {
        ...entityFields
      }
    }
    customer_aggregate(
      where: {
        entity: {
          name: { _ilike: $name }
          code: { _ilike: $code }
          email: { _ilike: $email }
          phone: { _ilike: $phone }
          city: { _ilike: $city }
          country: { _ilike: $country }
        }
      }
    ) {
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
    filters,
    queryFilters,
    updateFilters,
    hasNext,
    hasPrevious,
  } = useFilters({
    name: '',
    code: '',
    email: '',
    city: '',
    phone: '',
  })
  const [customers, setCustomers] = useState([])
  const { loading, error } = useQuery(GET_CUSTOMERS, {
    variables: {
      limit,
      offset,
      ...queryFilters,
    },
    onCompleted: data => {
      setCustomers(data.customer)
      setCount(data.customer_aggregate.aggregate.count)
    },
    fetchPolicy: 'cache-and-network',
  })
  return {
    loading,
    error,
    customers,
    count,
    nextPage,
    previousPage,
    filters,
    updateFilters,
    hasNext,
    hasPrevious,
  }
}
