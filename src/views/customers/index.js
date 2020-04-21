import React from 'react'
import CustomersList from './list'
import View from 'components/view'
import { useHistory } from 'react-router-dom'

const Action = ({ onClick = () => {} }) => (
  <span class="inline-flex rounded-md shadow-sm">
    <button
      type="button"
      class="relative inline-flex items-center px-4 py-2 border border-transparent text-sm leading-5 font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:shadow-outline-indigo focus:border-indigo-700 active:bg-indigo-700"
      onClick={onClick}
    >
      Nuevo
    </button>
  </span>
)

const Customers = () => {
  const { push } = useHistory()
  return (
    <View
      title="Clientes"
      action={<Action onClick={() => push('/customers/new')} />}
    >
      <CustomersList />
    </View>
  )
}

export default Customers
