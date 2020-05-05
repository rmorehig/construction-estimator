import React from 'react';
import Sidebar from 'components/Sidebar';
import Header from 'components/Header';

const Layout = ({ children }) => {
  return (
    <div className="h-screen flex flex-col">
      <Header />
      <div class="flex-1 flex overflow-hidden">
        <Sidebar />
        <main className="flex-1 z-0 pt-2 pb-6 focus:outline-none md:py-6 overflow-y-auto bg-cool-gray-100">
          {children}
        </main>
      </div>
    </div>
  );
};

export default Layout;
