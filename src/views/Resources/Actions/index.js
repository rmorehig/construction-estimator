import React from 'react';
import { GoSearch as SearchIcon } from 'react-icons/go';
import useDropdown from 'hooks/useDropdown';
import { useModal } from 'context/modals';
import MaterialModal from 'views/MaterialModal';
import ServiceModal from 'views/ServiceModal';
import WorkerModal from 'views/WorkerModal';
const Actions = ({ search, onSearch = () => {} }) => {
  const [containerRef, isOpen, open] = useDropdown();
  const { openModal } = useModal();
  return (
    <div className="flex items-center">
      <div className="w-full">
        <div className="relative rounded-md shadow-sm w-full">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <SearchIcon className="text-gray-400" />
          </div>
          <input
            className="form-input block w-full pl-10 sm:text-sm sm:leading-5"
            placeholder="Buscar"
            value={search}
            onChange={(event) => onSearch(event.target.value)}
          />
        </div>
      </div>
      <div className="ml-3 relative" ref={containerRef}>
        <div>
          <span className="rounded-md shadow-sm">
            <button
              type="button"
              className="relative inline-flex items-center px-3 py-2 border border-transparent text-sm leading-5 font-medium rounded-md text-white bg-blue-500 hover:bg-blue-600 focus:outline-none focus:shadow-outline-blue focus:border-blue-600 active:bg-blue-600 transition duration-150 ease-in-out"
              onClick={open}
            >
              <svg
                className="mr-1 -mx-1 h-5 w-5"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
                  clipRule="evenodd"
                />
              </svg>
              Nuevo
            </button>
          </span>
        </div>

        <div className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg z-50">
          {isOpen && (
            <div className="py-1 rounded-md bg-white shadow-xs">
              <button
                className="text-left w-full px-4 py-2 text-sm leading-5 text-gray-700 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 transition duration-150 ease-in-out"
                onClick={() => openModal(<MaterialModal />)}
              >
                Material
              </button>
              <button
                className="text-left w-full px-4 py-2 text-sm leading-5 text-gray-700 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 transition duration-150 ease-in-out"
                onClick={() => openModal(<ServiceModal />)}
              >
                Servicio
              </button>
              <button
                className="text-left w-full px-4 py-2 text-sm leading-5 text-gray-700 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 transition duration-150 ease-in-out"
                onClick={() => openModal(<WorkerModal />)}
              >
                Trabajador
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Actions;
