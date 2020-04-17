import React from 'react'
import { NavLink } from 'react-router-dom'
const NavbarItem = ({ name, route }) => {
  return (
    <NavLink
      to={route}
      className="ml-4 px-3 py-2 rounded-md text-sm font-medium text-gray-300 hover:text-white hover:bg-gray-700"
      activeClassName="bg-gray-700"
      activeStyle={{ color: '#fff' }}
    >
      {name}
    </NavLink>
  )
}

export default NavbarItem
