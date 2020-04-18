import React from 'react'
import CustomersList from './list'
import { useGetCustomers } from 'graphql/queries/customers/getCustomers'
import View from 'components/view'

const Customers = () => {
  const { customers, count, nextPage, previousPage } = useGetCustomers()
  return (
    <View title="Clientes">
      <CustomersList
        customers={customers}
        count={count}
        nextPage={nextPage}
        previousPage={previousPage}
      />
    </View>
  )
}

export default Customers
