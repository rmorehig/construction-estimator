import React, { useState, useEffect } from 'react'

const NotificationContext = React.createContext()

const NotificationsProvider = props => {
  const [showNotifications, setShowNotifications] = useState(false)
  const [message, setMessage] = useState('')

  useEffect(() => {
    if (message) {
      setShowNotifications(true)
    }
    return () => {
      setShowNotifications(false)
    }
  }, [message])

  const value = React.useMemo(
    () => ({
      showNotifications,
      message,
      setMessage,
      hideNotifications: () => setShowNotifications(false),
    }),
    [showNotifications, message, setMessage, setShowNotifications]
  )
  return <NotificationContext.Provider value={value} {...props} />
}

function useNotifications() {
  const context = React.useContext(NotificationContext)
  if (context === undefined) {
    throw new Error(
      `useNotifications must be used within a NotificationsProvider`
    )
  }
  return context
}

export { NotificationsProvider, useNotifications }
