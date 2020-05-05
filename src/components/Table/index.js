import React from 'react';
import Spinner from 'components/Spinner';

const Table = ({
  loading = false,
  data = [],
  count = 0,
  nextPage = () => {},
  previousPage = () => {},
  hasPrevious = false,
  hasNext = false
}) => {
  if (loading)
    return (
      <div className="flex justify-center items-center text-5xl overflow-hidden h-64">
        <Spinner className="align-self text-blue-600" />
      </div>
    );
  return (
    <div className="align-middle inline-block min-w-full overflow-hidden rounded-md shadow-sm sm:rounded-lg border border-gray-300">
      <table className="min-w-full bg-white">
        <thead>
          <tr>
            <th className="px-6 py-3 bg-gray-50 border-b border-gray-200 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
              Nombre
            </th>
            <th className="px-6 py-3 bg-gray-50 border-b border-gray-200 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
              Tipo
            </th>
          </tr>
        </thead>
        <tbody>
          {data.map(({ id, name, material_type }) => {
            return (
              <tr key={id}>
                <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200 text-sm leading-5 font-medium text-gray-900">
                  {name}
                </td>
                <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200 text-sm leading-5 text-gray-500">
                  {material_type?.name}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <div className="bg-white px-4 py-3 flex items-center justify-betwee sm:px-6 w-full">
        <div className="hidden sm:block">
          <p className="text-sm leading-5 text-gray-700">
            <span className="font-medium">{count}</span>
            {count === 1 ? ' resultado' : ' resultados'}
          </p>
        </div>
        <div className="flex-1 flex justify-between sm:justify-end">
          <span className="relative z-0 inline-flex shadow-sm">
            <button
              type="button"
              className="relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-300 bg-white text-sm leading-5 font-medium text-gray-500 hover:text-gray-400 focus:z-10 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue active:bg-gray-100 active:text-gray-500 transition ease-in-out duration-150"
              disabled={!hasPrevious}
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
            <button
              type="button"
              className="-ml-px relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-300 bg-white text-sm leading-5 font-medium text-gray-500 hover:text-gray-400 focus:z-10 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue active:bg-gray-100 active:text-gray-500 transition ease-in-out duration-150"
              disabled={!hasNext}
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
    </div>
  );
};

export default Table;
