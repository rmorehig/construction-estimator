import React from 'react';
import { Link } from 'react-router-dom';
import useDropdown from 'hooks/useDropdown';
import Divider from 'components/Divider';
const Actions = () => {
  const [containerRef, isOpen, open] = useDropdown();
  return (
    <div className="flex items-center">
      <span class="shadow-sm rounded-md">
        <button
          type="button"
          class="inline-flex items-center px-4 py-2 border border-gray-300 text-sm leading-5 font-medium rounded-md text-gray-700 bg-white hover:text-gray-500 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 active:text-gray-800 active:bg-gray-50 transition duration-150 ease-in-out"
        >
          Editar
        </button>
      </span>

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
                  fill-rule="evenodd"
                  d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
                  clip-rule="evenodd"
                />
              </svg>
              Añadir
            </button>
          </span>
        </div>

        <div className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg z-50">
          {isOpen && (
            <div className="py-1 rounded-md bg-white shadow-xs">
              <Link
                className="block px-4 py-2 text-sm leading-5 text-gray-700 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 transition duration-150 ease-in-out"
                to="/resources/materials/new"
              >
                Material
              </Link>
              <Link
                className="block px-4 py-2 text-sm leading-5 text-gray-700 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 transition duration-150 ease-in-out"
                to="/resources/services/new"
              >
                Servicio
              </Link>
              <Link
                className="block px-4 py-2 text-sm leading-5 text-gray-700 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 transition duration-150 ease-in-out"
                to="/resources/workers/new"
              >
                Trabajador
              </Link>
              <Divider />
              <Link
                className="block px-4 py-2 text-sm leading-5 text-gray-700 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 transition duration-150 ease-in-out"
                to="/entities/contacts/new"
              >
                Contacto
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Actions;
