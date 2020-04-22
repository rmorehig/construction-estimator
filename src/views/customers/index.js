import React from 'react'
import CustomersList from './list'
import View from 'components/view'
import { useHistory } from 'react-router-dom'
import { useNotifications } from 'context/notifications'
import Notification from 'components/notification'
import Button from 'components/button'

const Customers = () => {
  const { push } = useHistory()
  const { showNotifications, message, hideNotifications } = useNotifications()
  return (
    <View
      title="Clientes"
      actions={<Button onClick={() => push('/customers/new')}>Nuevo</Button>}
    >
      <CustomersList />
      {showNotifications && (
        <Notification message={message} onClose={hideNotifications} />
      )}
    </View>
  )
}

export default Customers
