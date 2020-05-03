import React from 'react';
import { NavLink } from 'react-router-dom';
import avatar from 'assets/images/avatar.jpg';

const EntitiesIcon = () => (
  <svg
    className="mr-4 h-6 w-6 text-indigo-400 group-hover:text-indigo-300 group-focus:text-indigo-300 transition ease-in-out duration-150"
    stroke="currentColor"
    fill="none"
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
    />
  </svg>
);
const ResourcesIcon = () => (
  <svg
    className="mr-4 h-6 w-6 text-indigo-400 group-hover:text-indigo-300 group-focus:text-indigo-300 transition ease-in-out duration-150"
    stroke="currentColor"
    fill="none"
    viewBox="0 0 24 24"
  >
    <path
      d="M7 21C4.79086 21 3 19.2091 3 17V5C3 3.89543 3.89543 3 5 3H9C10.1046 3 11 3.89543 11 5V17C11 19.2091 9.20914 21 7 21ZM7 21H19C20.1046 21 21 20.1046 21 19V15C21 13.8954 20.1046 13 19 13H16.6569M11 7.34312L12.6569 5.68629C13.4379 4.90524 14.7042 4.90524 15.4853 5.68629L18.3137 8.51472C19.0948 9.29577 19.0948 10.5621 18.3137 11.3431L9.82843 19.8284M7 17H7.01"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
    />
  </svg>
);

const Sidebar = () => {
  return (
    <div className="hidden md:flex md:flex-shrink-0 shadow-sm">
      <div className="flex flex-col w-64 border-r border-gray-200 bg-indigo-800">
        <div className="h-0 flex-1 flex flex-col pt-5 pb-4 overflow-y-auto">
          <div className="flex items-center flex-shrink-0 px-4 text-white">
            LOGO + MARCA
          </div>

          <nav className="mt-5 flex-1 px-2 bg-indigo-800 border-t border-indigo-700">
            <NavLink
              to="/entities"
              className="mt-1 group flex items-center px-2 py-2 text-sm leading-5 font-medium text-indigo-300 rounded-md hover:text-white hover:bg-indigo-600 focus:outline-none focus:text-white focus:bg-indigo-600 transition ease-in-out duration-150"
            >
              <EntitiesIcon />
              Entidades
            </NavLink>
            <NavLink
              to="/resources"
              className="mt-1 group flex items-center px-2 py-2 text-sm leading-5 font-medium text-indigo-300 rounded-md hover:text-white hover:bg-indigo-600 focus:outline-none focus:text-white focus:bg-indigo-600 transition ease-in-out duration-150"
            >
              <ResourcesIcon />
              Recursos
            </NavLink>
          </nav>
        </div>
        <div className="flex-shrink-0 flex border-t border-indigo-700 p-4">
          <a href="#" className="flex-shrink-0 w-full group block">
            <div className="flex items-center">
              <div>
                <img
                  className="object-cover inline-block h-9 w-9 rounded-full"
                  src={avatar}
                  alt="avatar"
                />
              </div>
              <div className="ml-3">
                <p className="text-sm leading-5 font-medium text-white">
                  Alejandro España Orts
                </p>
                <p className="text-xs leading-4 font-medium text-indigo-300 group-hover:text-indigo-100 transition ease-in-out duration-150">
                  Perfil
                </p>
              </div>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
