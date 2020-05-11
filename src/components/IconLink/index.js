import React, { useState } from 'react';

const types = {
  email: {
    value: 'mailto: ',
    icon: (
      <svg
        className="flex-shrink-0 mr-1.5 h-5 w-5"
        fill="currentColor"
        viewBox="0 0 20 20"
      >
        <path
          fill-rule="evenodd"
          d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884zM18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"
          clip-rule="evenodd"
        />
      </svg>
    )
  },
  phone: {
    value: 'tel: ',
    icon: (
      <svg
        class="flex-shrink-0 mr-1.5 h-5 w-5"
        fill="currentColor"
        viewBox="0 0 24 24"
      >
        <path d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
      </svg>
    )
  }
};
const IconLink = ({ type, value, showAlways = false }) => {
  const [showValue, setShowValue] = useState(false);
  return (
    <a
      href={`${types[type]?.value}${value}`}
      className="flex items-center text-sm leading-5 text-gray-400 hover:text-blue-500 transition duration-150 ease-in-out"
      onMouseEnter={() => setShowValue(true)}
      onMouseLeave={() => setShowValue(false)}
    >
      {types[type]?.icon}
      {(showAlways || showValue) && <span>{value}</span>}
    </a>
  );
};

export default IconLink;
