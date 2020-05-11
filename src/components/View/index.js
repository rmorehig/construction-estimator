import React from 'react';
import Badge from 'components/Badge';
import { Link } from 'react-router-dom';

const View = ({ children, title = '', actions, badge, parent }) => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 flex flex-col h-full">
      <div className="lg:flex justify-between items-center">
        <div className="flex mb-2 items-center">
          {parent && (
            <div className="mr-2">
              <Link
                className="flex items-center text-xl font-medium text-gray-600 hover:text-gray-700 transition duration-150 ease-in-out"
                to={parent}
              >
                <svg
                  className="flex-shrink-0 h-5 w-5 text-gray-600"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M7 16l-4-4m0 0l4-4m-4 4h18"></path>
                </svg>
              </Link>
            </div>
          )}
          <h1 className="text-2xl font-semibold text-gray-900">{title}</h1>
          {badge && (
            <Badge variant={badge?.color} className="ml-3">
              {badge?.value}
            </Badge>
          )}
        </div>
        {actions}
      </div>
      <div className="py-2 sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8 flex-1 flex flex-col">
        {children}
      </div>
    </div>
  );
};

export default View;
