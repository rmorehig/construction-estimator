import React from 'react';
import { Main, LayoutWrapper } from './styles';
import Sidebar from 'components/Sidebar';

const Layout = ({ children }) => {
  return (
    <LayoutWrapper>
      <Sidebar />
      <Main>{children}</Main>
    </LayoutWrapper>
  );
};

export default Layout;
