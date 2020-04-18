import React from 'react'
import Navbar from 'components/Navbar'

const Layout = ({ children }) => {
  return (
    <div className="flex flex-col h-screen">
      <Navbar />
      <main className="bg-gray-100 flex-auto">{children}</main>
    </div>
  )
}

export default Layout
