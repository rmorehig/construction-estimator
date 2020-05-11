import React from 'react';
import Badge from 'components/Badge';
import IconLink from 'components/IconLink';

const Contact = ({ name, email, phone, position, default_contact }) => {
  return (
    <div className="flex px-4 py-5 sm:px-6 items-center justify-between focus:outline-none focus:bg-gray-50 transition duration-150 ease-in-out">
      <div className="flex-1 flex flex-col flex-shrink">
        <div className="text-sm leading-5 font-medium text-gray-700 truncate">
          {name}
        </div>
        <div className="mt-2 sm:flex sm:justify-between">
          <div className="sm:flex">
            <div className="mr-3">
              <IconLink type="email" value={email} />
            </div>
            <div className="mt-2 flex items-center text-sm leading-5 text-gray-500 sm:mt-0">
              <IconLink type="phone" value={phone} />
            </div>
          </div>
        </div>
      </div>
      <div className="flex-1 flex-shrink-0 flex items-center justify-end">
        {default_contact && (
          <Badge green className="mr-2">
            Principal
          </Badge>
        )}
        {position && <Badge gray>{position}</Badge>}
        <div>
          <svg
            class="ml-4 h-5 w-5 text-gray-600 cursor-pointer hover:text-blue-500"
            fill="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"></path>
          </svg>
        </div>
      </div>
    </div>
  );
};

export default Contact;
