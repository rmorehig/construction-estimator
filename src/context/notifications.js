import React, { useState, useEffect, useCallback } from 'react';
import Notification from 'components/Notification';

const NotificationContext = React.createContext();

const NotificationsProvider = (props) => {
  const [showNotifications, setShowNotifications] = useState(false);
  const [message, setMessage] = useState('');

  useEffect(() => {
    if (message) {
      setShowNotifications(true);
    }
    return () => {
      setShowNotifications(false);
    };
  }, [message]);

  const hideNotifications = useCallback(() => {
    setShowNotifications(false);
  }, [setShowNotifications]);

  const value = React.useMemo(
    () => ({
      showNotifications,
      message,
      setMessage,
      hideNotifications
    }),
    [showNotifications, message, setMessage, hideNotifications]
  );

  return (
    <NotificationContext.Provider value={value} {...props}>
      {props.children}
      {showNotifications && (
        <Notification message={message} onClose={hideNotifications} />
      )}
    </NotificationContext.Provider>
  );
};

function useNotifications() {
  const context = React.useContext(NotificationContext);
  if (context === undefined) {
    throw new Error(
      `useNotifications must be used within a NotificationsProvider`
    );
  }
  return context;
}

export { NotificationsProvider, useNotifications };
