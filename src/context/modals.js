import React, { useState, useCallback, useEffect, useRef } from 'react';

const ModalContext = React.createContext();

const ModalRenderer = ({ modal, handleClose, data }) => {
  useEffect(() => {
    const bind = (e) => {
      if (e.keyCode !== 27) {
        return;
      }

      if (
        document.activeElement &&
        ['INPUT', 'SELECT'].includes(document.activeElement.tagName)
      ) {
        return;
      }

      handleClose();
    };

    document.addEventListener('keyup', bind);
    return () => {
      document.removeEventListener('keyup', bind);
    };
  }, [modal, handleClose]);

  return React.cloneElement(modal, { handleClose, data });
};

const ModalProvider = (props) => {
  const [modal, setModal] = useState(null);
  const [data, setData] = useState(null);

  const openModal = useCallback(
    (component, data) => {
      setModal(component);
      setData(data);
    },
    [setModal, setData]
  );

  const closeModal = useCallback(() => {
    setModal(null);
    setData(null);
  }, [setModal, setData]);

  const value = React.useMemo(
    () => ({
      openModal,
      closeModal,
      modal
    }),
    [openModal, closeModal, modal]
  );

  return (
    <ModalContext.Provider value={value} {...props}>
      {props.children}
      {modal && (
        <ModalRenderer handleClose={closeModal} data={data} modal={modal} />
      )}
    </ModalContext.Provider>
  );
};

function useModal() {
  const context = React.useContext(ModalContext);
  if (context === undefined) {
    throw new Error(`useModal must be used within a ModalProvider`);
  }
  return context;
}

export { ModalProvider, useModal };
