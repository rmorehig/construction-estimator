import React, { useState } from 'react';
import avatar from 'assets/images/avatar.jpg';
import Divider from 'components/Divider';
import useDropdown from 'hooks/useDropdown';

const Header = () => {
  const [containerRef, isOpen, toggle] = useDropdown();
  return (
    <header className="shadow flex bg-gray-800 flex flex-shrink-0">
      <div className="w-64"></div>
      <nav className="flex-1">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-end h-16">
            <div className="flex items-center">
              <div className="flex-shrink-0"></div>
              <div className="hidden md:ml-2 md:flex-shrink-0 md:flex md:items-center">
                <div className="ml-3 relative" ref={containerRef}>
                  <div>
                    <button
                      className="flex text-sm border-2 border-transparent rounded-full focus:outline-none focus:border-gray-300 transition duration-150 ease-in-out"
                      onClick={toggle}
                    >
                      <img
                        className="h-10 w-10 rounded-full"
                        src={avatar}
                        alt="avatar"
                      />
                    </button>
                  </div>
                  <div className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg z-50">
                    {isOpen && (
                      <div className="py-1 rounded-md bg-white shadow-xs">
                        <div className="px-4 py-3">
                          <p className="text-sm leading-5 font-medium text-gray-900">
                            Alejandro España Orts
                          </p>
                        </div>
                        <Divider />
                        <a
                          href="#"
                          className="block px-4 py-2 text-sm leading-5 text-gray-700 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 transition duration-150 ease-in-out"
                        >
                          Perfil
                        </a>
                        <a
                          href="#"
                          className="block px-4 py-2 text-sm leading-5 text-gray-700 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 transition duration-150 ease-in-out"
                        >
                          Cerrar sesión
                        </a>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
