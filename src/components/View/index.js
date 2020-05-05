import React from 'react';

const View = ({ children, title = '', actions }) => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 flex flex-col h-full">
      <div className="lg:flex justify-between items-center">
        <h1 className="my-2 lg:my-0 text-2xl font-semibold text-gray-900">
          {title}
        </h1>
        {actions}
      </div>
      <div className="py-2 sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8 flex-1 flex flex-col">
        {children}
      </div>
    </div>
  );
};

export default View;
