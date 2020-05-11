import React from 'react';
import Badge from 'components/Badge';

const Contact = ({ name, email, phone, position, default_contact }) => {
  return (
    <div className="flex px-4 py-5 sm:px-6 items-center justify-between focus:outline-none focus:bg-gray-50 transition duration-150 ease-in-out">
      <div className="flex-1 flex flex-col flex-shrink">
        <div className="text-sm leading-5 font-medium text-gray-700 truncate">
          {name}
        </div>
        <div className="mt-2 sm:flex sm:justify-between">
          <div className="sm:flex">
            <div className="mr-6 flex items-center text-sm leading-5 text-gray-500">
              <svg
                className="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fill-rule="evenodd"
                  d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884zM18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"
                  clip-rule="evenodd"
                />
              </svg>
              <span>{email}</span>
            </div>
            <div className="mt-2 flex items-center text-sm leading-5 text-gray-500 sm:mt-0">
              <svg
                class="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
              </svg>
              <span>{phone}</span>
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
