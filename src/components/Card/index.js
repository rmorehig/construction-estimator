import React from 'react';
import Spinner from 'components/Spinner';

const Card = ({ children }) => (
  <div
    className="h-full flex flex-col bg-white overflow-hidden shadow rounded-lg"
    style={{ height: '580px' }}
  >
    {children}
  </div>
);

const CardHeader = ({ title, subtitle, noBorder, action }) => (
  <div
    className={`px-4 py-5 sm:px-6 ${!noBorder && 'border-b border-gray-200'} ${
      action && 'flex items-center justify-between'
    }`}
  >
    <div>
      <h3 className="text-lg leading-6 font-medium text-gray-900">{title}</h3>
      {subtitle && (
        <p className="mt-1 max-w-2xl text-sm leading-5 text-gray-500">
          {subtitle}
        </p>
      )}
    </div>
    {action}
  </div>
);

const CardContent = ({ children, noPadding, loading = false }) => {
  if (loading)
    return (
      <div className="h-full flex items-center justify-center text-5xl overflow-hidden">
        <Spinner className="text-blue-600" />
      </div>
    );
  return (
    <div className={`flex-1 text-sm ${!noPadding && 'px-4 py-5 sm:p-6'}`}>
      {children}
    </div>
  );
};
const CardFooter = ({ children }) => (
  <div className="border-t border-gray-200 px-4 py-4">{children}</div>
);

export { Card, CardHeader, CardContent, CardFooter };
