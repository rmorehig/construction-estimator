import React from 'react';
import classnames from 'classnames';

const Button = ({
  children,
  primary = false,
  fullWidth = false,
  className = null,
  ...props
}) => {
  const baseContainer = 'inline-flex rounded-md shadow-sm';
  const baseButton =
    'inline-flex items-center px-4 py-2 text-sm leading-5 font-medium rounded-md focus:outline-none focus:border-blue-300 focus:shadow-outline-blue transition ease-in-out duration-150';

  const containerClasses = classnames(
    baseContainer,
    { 'w-full': fullWidth },
    className
  );

  const buttonClasses = classnames(baseButton, {
    'border border-gray-300 text-gray-700 bg-white hover:text-gray-500 active:text-gray-800 active:bg-gray-50': !primary,
    'border border-transparent text-white bg-blue-500 hover:bg-blue-600 focus:outline-none focus:border-blue-700': primary,
    'w-full': fullWidth
  });

  return (
    <span className={containerClasses}>
      <button type="button" className={buttonClasses} {...props}>
        {children}
      </button>
    </span>
  );
};

export default Button;
