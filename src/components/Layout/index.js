import React from 'react';
import Sidebar from 'components/Sidebar';

const Layout = ({ children }) => {
  return (
    <div className="h-screen flex overflow-hidden bg-gray-100">
      <Sidebar />
      <main className="flex-1 relative z-0 overflow-y-auto pt-2 pb-6 focus:outline-none md:py-6">
        {children}
      </main>
    </div>
  );
};

export default Layout;
