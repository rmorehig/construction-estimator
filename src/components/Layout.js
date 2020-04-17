import React from 'react'
import Navbar from 'components/Navbar'
import Header from 'components/Header'

const Layout = ({ children }) => {
  return (
    <div className="flex flex-col h-screen">
      <Navbar />
      <Header />
      <main className="bg-gray-100 flex-auto">
        <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">{children}</div>
      </main>
    </div>
  )
}

export default Layout
