import React from 'react';

const Tabs = ({ value, tabs = [], onChange = () => {} }) => {
  return (
    <div className="mb-4">
      <div className="sm:hidden">
        <select
          aria-label="Selected tab"
          className="mt-1 form-select block w-full pl-3 pr-10 py-2 text-base leading-6 border-gray-300 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 sm:text-sm sm:leading-5 transition ease-in-out duration-150"
        >
          <option selected>Todo</option>
          <option>Materiales</option>
          <option>Servicios</option>
          <option>Trabajadores</option>
          <option>Clientes</option>
        </select>
      </div>
      <div className="hidden sm:block">
        <div className="border-b border-gray-200">
          <nav className="-mb-px flex">
            {tabs.map(({ id, name }) => (
              <button
                key={id}
                className={`whitespace-no-wrap mr-8 py-4 px-1 border-b-2 border-transparent font-medium text-sm leading-5 focus:outline-none ${
                  id === value
                    ? 'border-indigo-500 text-indigo-600'
                    : 'text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
                onClick={() => onChange(id)}
              >
                {name}
              </button>
            ))}
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Tabs;
