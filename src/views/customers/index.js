import React from 'react'
import CustomersList from './list'
import { useGetCustomers } from 'graphql/queries/customers/getCustomers'
import View from 'components/view'

const Customers = () => {
  const { customers, count } = useGetCustomers()
  return (
    <View title="Clientes">
      <CustomersList customers={customers} count={count} />
    </View>
  )
}

export default Customers
