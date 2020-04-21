import React from 'react'

const View = ({ children, title = '', action }) => {
  return (
    <div>
      <header className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto py-4 px-4 sm:px-6 lg:px-8 flex items-center justify-between flex-wrap sm:flex-no-wrap">
          <h1 className="text-lg leading-6 font-semibold text-gray-900">
            {title}
          </h1>
          {action}
        </div>
      </header>
      <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">{children}</div>
    </div>
  )
}

export default View
