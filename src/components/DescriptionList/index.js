import React from 'react';

const DescriptionList = ({ children }) => {
  return <dl>{children}</dl>;
};

const DescriptionRow = ({ term, description, noBorder }) => (
  <div
    className={`mt-8 sm:mt-0 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6 sm:py-5 ${
      !noBorder && 'sm:border-t sm:border-gray-200'
    }`}
  >
    <dt className="text-sm leading-5 font-medium text-gray-500">{term}</dt>
    <dd className="mt-1 text-sm leading-5 text-gray-900 sm:mt-0 sm:col-span-2">
      {description}
    </dd>
  </div>
);
export { DescriptionList, DescriptionRow };
