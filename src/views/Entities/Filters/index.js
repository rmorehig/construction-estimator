import React from 'react';
import { GoSearch as SearchIcon } from 'react-icons/go';
import { RiEqualizerLine as FilterIcon } from 'react-icons/ri';
const Filters = ({ filters = {}, updateFilters = () => {} }) => {
  return (
    <div className="mb-4 flex items-center">
      <div className="relative rounded-md shadow-sm w-full md:w-1/2 lg:w-1/4">
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
          <SearchIcon className="text-gray-400" />
        </div>
        <input
          className="form-input block w-full pl-10 sm:text-sm sm:leading-5"
          placeholder="Buscar"
          value={filters.search}
          onChange={(event) => updateFilters({ search: event.target.value })}
        />
      </div>
      <div className="ml-2">
        <span className="relative z-0 shadow-sm">
          <button
            type="button"
            className="relative items-center px-2 py-2 rounded-md border border-gray-300 bg-white text-sm leading-5 font-medium text-gray-500 hover:text-gray-400 focus:z-10 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue active:bg-gray-100 active:text-gray-500 transition ease-in-out duration-150"
          >
            <FilterIcon className="h-5 w-5" />
          </button>
        </span>
      </div>
    </div>
  );
};

export default Filters;
