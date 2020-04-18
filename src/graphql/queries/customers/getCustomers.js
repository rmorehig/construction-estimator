import gql from 'graphql-tag'
import { useQuery } from '@apollo/react-hooks'
import { useState } from 'react'

export const GET_CUSTOMERS = gql`
  query getProviders {
    customer {
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
    customer_aggregate {
      aggregate {
        count
      }
    }
  }
`

export const useGetCustomers = () => {
  const [customers, setCustomers] = useState([])
  const [count, setCount] = useState(0)
  const { loading } = useQuery(GET_CUSTOMERS, {
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
  }
}
