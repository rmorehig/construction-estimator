import React from 'react';

const Card = ({ children }) => (
  <div className="bg-white overflow-hidden shadow rounded-lg">{children}</div>
);

const CardHeader = ({ title, subtitle, noBorder }) => (
  <div
    className={`px-4 py-5 sm:px-6 ${!noBorder && 'border-b border-gray-200'}`}
  >
    <h3 className="text-lg leading-6 font-medium text-gray-900">{title}</h3>
    {subtitle && (
      <p className="mt-1 max-w-2xl text-sm leading-5 text-gray-500">
        {subtitle}
      </p>
    )}
  </div>
);

const CardContent = ({ children, noPadding }) => (
  <div className={` text-sm ${!noPadding && 'px-4 py-5 sm:p-6'}`}>
    {children}
  </div>
);

export { Card, CardHeader, CardContent };
