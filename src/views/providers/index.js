import React from 'react'
import ProvidersList from './list'
import View from 'components/view'
import { useHistory } from 'react-router-dom'
import { useNotifications } from 'context/notifications'
import Notification from 'components/notification'

const Action = ({ onClick = () => {} }) => (
  <span class="inline-flex rounded-md shadow-sm">
    <button
      type="button"
      class="inline-flex items-center px-4 py-2 border border-transparent text-sm leading-5 font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:shadow-outline-indigo focus:border-indigo-700 active:bg-indigo-700"
      onClick={onClick}
    >
      Nuevo
    </button>
  </span>
)

const Providers = () => {
  const { push } = useHistory()
  const { showNotifications, message, hideNotifications } = useNotifications()
  return (
    <View
      title="Proveedores"
      action={<Action onClick={() => push('/providers/new')} />}
    >
      <ProvidersList />
      {showNotifications && (
        <Notification message={message} onClose={hideNotifications} />
      )}
    </View>
  )
}

export default Providers
