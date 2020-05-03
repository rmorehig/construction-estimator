import React from 'react';

const IconButton = ({ children, ...props }) => {
  return (
    <span className="inline-flex rounded-md shadow-sm">
      <button
        type="button"
        className="inline-flex items-center px-2 border border border-gray-300 text-sm leading-5 font-medium rounded-md text-white bg-indigo-500 hover:bg-indigo-400 focus:outline-none active:bg-indigo-700 transition ease-in-out duration-150"
        {...props}
      >
        {children}
      </button>
    </span>
  );
};

export default IconButton;
