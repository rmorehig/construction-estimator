import React from 'react';
import { NavLink } from 'react-router-dom';

const NavItem = ({ name, route, icon }) => (
  <NavLink
    to={route}
    activeClassName="bg-gray-300"
    className={`group flex items-center mt-1 px-3 py-2 text-sm leading-5 font-medium text-gray-900 rounded-md hover:text-gray-900 focus:outline-none hover:bg-gray-300 transition ease-in-out duration-150`}
  >
    {icon}
    <span className="truncate">{name}</span>
  </NavLink>
);

const DashboardIcon = () => (
  <svg
    class="flex-shrink-0 -ml-1 mr-3 h-6 w-6 text-gray-500 group-hover:text-gray-500 group-focus:text-gray-600 transition ease-in-out duration-150"
    stroke="currentColor"
    fill="none"
    viewBox="0 0 24 24"
  >
    <path
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-width="2"
      d="M3 12l9-9 9 9M5 10v10a1 1 0 001 1h3a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1h3a1 1 0 001-1V10M9 21h6"
    />
  </svg>
);
const EntitiesIcon = () => (
  <svg
    fill="none"
    class="flex-shrink-0 -ml-1 mr-3 h-6 w-6 text-gray-500 group-hover:text-gray-500 group-focus:text-gray-600 transition ease-in-out duration-150"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-width="2"
      d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
    />
  </svg>
);
const ResourcesIcon = () => (
  <svg
    class="flex-shrink-0 -ml-1 mr-3 h-6 w-6 text-gray-500 group-hover:text-gray-500 group-focus:text-gray-600 transition ease-in-out duration-150"
    stroke="currentColor"
    fill="none"
    viewBox="0 0 24 24"
  >
    <path
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-width="2"
      d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4"
    />
  </svg>
);
const TeamIcon = () => (
  <svg
    class="flex-shrink-0 -ml-1 mr-3 h-6 w-6 text-gray-500 group-hover:text-gray-500 group-focus:text-gray-600 transition ease-in-out duration-150"
    stroke="currentColor"
    fill="none"
    viewBox="0 0 24 24"
  >
    <path
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-width="2"
      d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
    />
  </svg>
);

const ConstructionsIcon = () => (
  <svg
    class="flex-shrink-0 -ml-1 mr-3 h-6 w-6 text-gray-500 group-hover:text-gray-500 group-focus:text-gray-600 transition ease-in-out duration-150"
    stroke="currentColor"
    fill="none"
    viewBox="0 0 24 24"
  >
    <path
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-width="2"
      d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"
    />
  </svg>
);

const CalendarIcon = () => (
  <svg
    class="flex-shrink-0 -ml-1 mr-3 h-6 w-6 text-gray-500 group-hover:text-gray-500 group-focus:text-gray-600 transition ease-in-out duration-150"
    stroke="currentColor"
    fill="none"
    viewBox="0 0 24 24"
  >
    <path
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-width="2"
      d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
    />
  </svg>
);
const BidsIcon = () => (
  <svg
    class="flex-shrink-0 -ml-1 mr-3 h-6 w-6 text-gray-500 group-hover:text-gray-500 group-focus:text-gray-600 transition ease-in-out duration-150"
    stroke="currentColor"
    fill="none"
    viewBox="0 0 24 24"
  >
    <path
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-width="2"
      d="M16 8v8m-4-5v5m-4-2v2m-2 4h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
    />
  </svg>
);
const Sidebar = () => {
  return (
    <div className="hidden md:flex md:flex-shrink-0 shadow-sm bg-cool-gray-50 h-full">
      <div className="flex flex-col w-64 border-r border-gray-200">
        <div className="h-0 flex-1 flex flex-col px-4">
          <nav className="mt-5">
            <h3 class="px-3 text-xs leading-4 font-semibold text-gray-500 uppercase tracking-wider">
              Menú
            </h3>
            <div>
              <NavItem
                route="/dashboard"
                name="Inicio"
                icon={<DashboardIcon />}
              />

              <NavItem
                route="/constructions"
                name="Obras"
                icon={<ConstructionsIcon />}
              />
              <NavItem route="/bids" name="Licitaciones" icon={<BidsIcon />} />
              <NavItem
                route="/entities"
                name="Entidades"
                icon={<EntitiesIcon />}
              />
              <NavItem
                route="/resources"
                name="Recursos"
                icon={<ResourcesIcon />}
              />
              <NavItem
                route="/calendar"
                name="Calendario"
                icon={<CalendarIcon />}
              />
              <NavItem route="/team" name="Equipo" icon={<TeamIcon />} />
            </div>
            <div class="mt-5">
              <h3 class="px-3 text-xs leading-4 font-semibold text-gray-500 uppercase tracking-wider">
                Obras activas
              </h3>
              <div class="mt-2">
                <a
                  href="#"
                  class="group flex items-center px-3 py-2 text-sm leading-5 font-medium text-gray-600 rounded-md hover:text-gray-900 hover:bg-gray-50 focus:outline-none focus:bg-gray-100 transition ease-in-out duration-150"
                >
                  <span class="truncate">Reforma Universidad Almería</span>
                </a>
                <a
                  href="#"
                  class="mt-1 group flex items-center px-3 py-2 text-sm leading-5 font-medium text-gray-600 rounded-md hover:text-gray-900 hover:bg-gray-50 focus:outline-none focus:bg-gray-100 transition ease-in-out duration-150"
                >
                  <span class="truncate">Construcción Edificio Falso</span>
                </a>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
