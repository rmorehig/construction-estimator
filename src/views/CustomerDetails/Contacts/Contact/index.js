import React from 'react';
import Badge from 'components/Badge';

const Contact = ({ name, email, phone, position, default_contact }) => {
  return (
    <div className="flex px-4 py-4 sm:px-6 cursor-pointer items-center justify-between hover:bg-gray-50 focus:outline-none focus:bg-gray-50 transition duration-150 ease-in-out">
      <div className="flex flex-col">
        <div className="text-sm leading-5 font-medium text-gray-700 truncate">
          {name}
        </div>
        <div className="mt-2 sm:flex sm:justify-between">
          <div className="sm:flex">
            <div className="mr-6 flex items-center text-sm leading-5 text-gray-500">
              {email}
            </div>
            <div className="mt-2 flex items-center text-sm leading-5 text-gray-500 sm:mt-0">
              {phone}
            </div>
          </div>
        </div>
      </div>
      <div className="flex-shrink-0 flex">
        {default_contact && <Badge green>Principal</Badge>}
        {position && (
          <Badge gray className="ml-2">
            {position}
          </Badge>
        )}
      </div>
    </div>
  );
};

export default Contact;
