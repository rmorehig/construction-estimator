import React from 'react';

const Modal = ({ children }) => {
  return (
    <div className="fixed bottom-0 inset-x-0 pb-4 sm:inset-0 sm:flex sm:items-center sm:justify-center">
      <div className="fixed inset-0 transition-opacity">
        <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
      </div>
      <div className="bg-white rounded-lg overflow-hidden shadow-xl transform transition-all sm:max-w-4xl sm:w-full">
        {children}
      </div>
    </div>
  );
};

export default Modal;
