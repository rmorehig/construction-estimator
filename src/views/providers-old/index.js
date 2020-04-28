import React from 'react'
import ProvidersList from './list'
import View from 'components/view'
import { useHistory } from 'react-router-dom'
import { useNotifications } from 'context/notifications'
import Notification from 'components/notification'
import Button from 'components/button'

const Providers = () => {
  const { push } = useHistory()
  const { showNotifications, message, hideNotifications } = useNotifications()
  return (
    <View
      title="Proveedores"
      actions={<Button onClick={() => push('/providers/new')}>Nuevo</Button>}
    >
      <ProvidersList />
      {showNotifications && (
        <Notification message={message} onClose={hideNotifications} />
      )}
    </View>
  )
}

export default Providers
