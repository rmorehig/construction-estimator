import React from 'react';
import classnames from 'classnames';
import Icon from 'components/Icon';

const IconButton = ({
  icon = 'plus',
  variant = 'outlined',
  className = null,
  ...props
}) => {
  const baseContainer = 'inline-flex rounded-md';

  const containerClasses = classnames(
    baseContainer,
    { 'shadow-sm': variant === 'outlined' },
    className
  );

  const baseButton =
    'relative inline-flex items-center text-sm leading-5 font-medium focus:z-10 focus:outline-none transition ease-in-out duration-150';

  const buttonClasses = classnames(baseButton, {
    'bg-white text-gray-500 hover:text-blue-500': variant === 'none',
    'px-2 py-2 bg-white rounded-md text-gray-500 hover:text-gray-400 border border-gray-300 focus:border-blue-300 focus:shadow-outline-blue active:bg-gray-100 active:text-gray-500':
      variant === 'outlined'
  });

  return (
    <span className={containerClasses}>
      <button type="button" className={buttonClasses} {...props}>
        <Icon name={icon} />
      </button>
    </span>
  );
};

export default IconButton;
