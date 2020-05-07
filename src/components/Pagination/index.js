import React from 'react';

const Pagination = ({
  count = 0,
  limit = 0,
  offset = 0,
  page = 1,
  previousPage = () => {},
  nextPage = () => {},
  showCount = false,
  showPage = false
}) => {
  return (
    <div className="flex items-center w-full">
      {showCount && (
        <div className="hidden sm:block">
          <p className="text-sm leading-5 text-gray-700">
            <span className="font-medium">{`${count === 0 ? 0 : offset + 1} - ${
              count < limit
                ? count
                : count - offset > limit
                ? limit
                : count - offset + limit
            } de ${count}`}</span>
            {count === 1 ? ' resultado' : ' resultados'}
          </p>
        </div>
      )}
      <div className="flex-1 flex justify-between sm:justify-end">
        <span className="relative z-0 inline-flex shadow-sm">
          <button
            type="button"
            className="relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-300 bg-white text-sm leading-5 font-medium text-gray-500 hover:text-gray-400 focus:z-10 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue active:bg-gray-100 active:text-gray-500 transition ease-in-out duration-150"
            onClick={previousPage}
          >
            <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
              <path
                fillRule="evenodd"
                d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                clipRule="evenodd"
              />
            </svg>
          </button>
          {showPage && (
            <span className="relative inline-flex items-center px-4 py-2 border-t border-b border-gray-300 bg-white text-sm leading-5 font-medium text-gray-500 focus:z-10 focus:outline-none transition ease-in-out duration-150">
              {page}
            </span>
          )}
          <button
            type="button"
            className="-ml-px relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-300 bg-white text-sm leading-5 font-medium text-gray-500 hover:text-gray-400 focus:z-10 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue active:bg-gray-100 active:text-gray-500 transition ease-in-out duration-150"
            onClick={nextPage}
          >
            <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
              <path
                fillRule="evenodd"
                d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        </span>
      </div>
    </div>
  );
};

export default Pagination;
