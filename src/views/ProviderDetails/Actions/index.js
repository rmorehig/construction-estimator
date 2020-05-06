import React from 'react';
import { Link } from 'react-router-dom';
import useDropdown from 'hooks/useDropdown';
import Divider from 'components/Divider';
import { useModal } from 'context/modals';
import ProviderModal from 'views/ProviderModal';
import Button from 'components/Button';
const Actions = ({ data }) => {
  const [containerRef, isOpen, open] = useDropdown();
  const { openModal } = useModal();
  return (
    <div className="flex items-center">
      <Button type="button" onClick={() => openModal(<ProviderModal />, data)}>
        Editar
      </Button>

      <div className="ml-3 relative" ref={containerRef}>
        <div>
          <Button type="button" onClick={open} primary>
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
            Añadir
          </Button>
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
