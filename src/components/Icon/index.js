import React from 'react';

const Icon = ({ name, className, ...props }) => {
  switch (name) {
    case 'plus':
      return (
        <svg
          className="h-5 w-5"
          fill="currentColor"
          viewBox="0 0 20 20"
          {...props}
        >
          <path
            fillRule="evenodd"
            d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
            clipRule="evenodd"
          />
        </svg>
      );
    default:
      return <svg></svg>;
  }
};

export default Icon;
