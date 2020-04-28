import React from 'react';
import styled from 'styled-components';
import { ReactComponent as ResourcesIcon } from 'assets/icons/resources.svg';
import {
  RiUserStarLine as CustomersIcon,
  RiAdminLine as ProvidersIcon
} from 'react-icons/ri';

import avatar from 'assets/images/avatar.jpg';
import { Tooltip } from '@material-ui/core';
import { NavLink } from 'react-router-dom';

export const SidebarWrapper = styled.aside`
  background: ${(props) => props.theme.colors.blue.main};
  overflow-y: hidden;
  overflow-x: hidden;
  border-right: 1px solid #f0f0f3;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: 26px 0;
  transition: all 0.2s;
  z-index: 3;
`;

export const UserAvatar = styled.img`
  cursor: pointer;
  border-radius: 9999px;
  box-sizing: border-box;
  border: 2px solid ${(props) => props.theme.colors.white};
  height: 48px;
  max-width: 100%;
  width: 48px;
  object-fit: cover;
  background-color: #333;
  bottom: 20px;
  display: block;
  position: absolute;
`;

export const Logo = styled.div`
  background-color: ${(props) => props.theme.colors.gray.light};
  border-radius: 9999px;
  box-sizing: border-box;
  height: 30px;
  max-width: 100%;
  width: 30px;
`;
const Navbar = styled.nav`
  flex: 1;
  display: flex;
  flex-direction: column;
`;
const NavbarItem = styled(NavLink)`
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  width: 48px;
  height: 48px;
  border-radius: 4px;
  margin-top: 20px;
  align-items: center;
  svg {
    fill: ${(props) => props.theme.colors.white};
  }
  :hover {
    background: ${(props) => props.theme.colors.blue.light};
    svg {
      fill: ${(props) => props.theme.colors.blue.main};
    }
  }
`;

const Sidebar = () => {
  return (
    <SidebarWrapper>
      <Logo />
      <Navbar>
        <Tooltip title="Proveedores" placement="right">
          <NavbarItem to="/providers">
            <ProvidersIcon size={22} />
          </NavbarItem>
        </Tooltip>
        <Tooltip title="Clientes" placement="right">
          <NavbarItem to="/customers">
            <CustomersIcon size={22} />
          </NavbarItem>
        </Tooltip>
        <Tooltip title="Recursos" placement="right">
          <NavbarItem to="/resources">
            <ResourcesIcon />
          </NavbarItem>
        </Tooltip>
      </Navbar>
      <UserAvatar src={avatar} />
    </SidebarWrapper>
  );
};

export default Sidebar;
