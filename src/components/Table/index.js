import React from 'react';
import Spinner from 'components/Spinner';

const SortAscIcon = () => (
  <svg
    className="flex-shrink-0 h-5 w-5 text-gray-500 group-hover:text-gray-500 group-focus:text-gray-600 transition ease-in-out duration-150"
    fill="currentColor"
    viewBox="0 0 20 20"
  >
    <path
      d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
      clipRule="evenodd"
      fillRule="evenodd"
    ></path>
  </svg>
);

const SortDescIcon = () => (
  <svg
    className="flex-shrink-0 h-5 w-5 text-gray-500 group-hover:text-gray-500 group-focus:text-gray-600 transition ease-in-out duration-150"
    fill="currentColor"
    viewBox="0 0 20 20"
  >
    <path
      d="M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z"
      clipRule="evenodd"
      fillRule="evenodd"
    ></path>
  </svg>
);

const Table = React.memo(
  ({
    loading = true,
    columns = [],
    data = [],
    count = 0,
    page = 1,
    nextPage,
    previousPage,
    limit,
    offset,
    orderBy,
    handleOrderBy = () => {},
    onClickRow = () => {}
  }) => {
    if (loading)
      return (
        <div className="flex flex-1 justify-center text-5xl overflow-hidden">
          <Spinner className="text-blue-600 mt-16" />
        </div>
      );
    return (
      <div className="overflow-x-auto rounded-md shadow-sm sm:rounded-lg border border-gray-300">
        <table className="min-w-full bg-white">
          <thead>
            <tr>
              {columns.map(({ id, name }) => (
                <th
                  key={id}
                  className="px-6 py-3 bg-gray-50 border-b border-gray-200 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider"
                  onClick={() => handleOrderBy(id)}
                >
                  <div className="flex items-center">
                    <span>{name}</span>
                    {Object.keys(orderBy).includes(id) ? (
                      orderBy[id] === 'asc' ? (
                        <SortAscIcon />
                      ) : (
                        <SortDescIcon />
                      )
                    ) : undefined}
                  </div>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {data.map((row) => {
              return (
                <tr
                  key={row.id}
                  className="cursor-pointer hover:bg-gray-100"
                  onClick={() => onClickRow(row)}
                >
                  {columns.map(({ id, component: Component }, index) => (
                    <td
                      key={`${row.id}/${index}`}
                      className={`px-6 py-4 whitespace-no-wrap border-b border-gray-200 text-sm leading-5 ${
                        index === 0
                          ? 'text-gray-900 font-medium'
                          : 'text-gray-500'
                      }`}
                    >
                      {Component ? <Component {...row} /> : row[id]}
                    </td>
                  ))}
                </tr>
              );
            })}
          </tbody>
        </table>
        <div className="bg-white px-4 py-3 flex items-center justify-betwee sm:px-6 w-full">
          <div className="hidden sm:block">
            <p className="text-sm leading-5 text-gray-700">
              <span className="font-medium">{`${
                count === 0 ? 0 : offset + 1
              } - ${
                count < limit
                  ? count
                  : count - offset > limit
                  ? limit
                  : count - offset + limit
              } de ${count}`}</span>
              {count === 1 ? ' resultado' : ' resultados'}
            </p>
          </div>
          <div className="flex-1 flex justify-between sm:justify-end">
            <span className="relative z-0 inline-flex shadow-sm">
              <button
                type="button"
                className="relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-300 bg-white text-sm leading-5 font-medium text-gray-500 hover:text-gray-400 focus:z-10 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue active:bg-gray-100 active:text-gray-500 transition ease-in-out duration-150"
                onClick={previousPage}
              >
                <svg
                  className="h-5 w-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
              <span className="relative inline-flex items-center px-4 py-2 border-t border-b border-gray-300 bg-white text-sm leading-5 font-medium text-gray-500 focus:z-10 focus:outline-none transition ease-in-out duration-150">
                {page}
              </span>
              <button
                type="button"
                className="-ml-px relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-300 bg-white text-sm leading-5 font-medium text-gray-500 hover:text-gray-400 focus:z-10 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue active:bg-gray-100 active:text-gray-500 transition ease-in-out duration-150"
                onClick={nextPage}
              >
                <svg
                  className="h-5 w-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
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
      </div>
    );
  }
);

export default Table;
