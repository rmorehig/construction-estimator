import React from 'react'
import { Link } from 'react-router-dom'

const Table = ({ data = [] }) => {
  return (
    <div className="align-middle inline-block min-w-full shadow-xs overflow-hidden sm:rounded-lg border-b border-gray-200">
      <table className="min-w-full">
        <thead>
          <tr>
            <th className="px-6 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
              Nombre
            </th>
            <th className="px-6 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
              Código
            </th>
            <th className="px-6 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
              Email
            </th>
            <th className="px-6 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
              Teléfono
            </th>
            <th className="px-6 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
              Ciudad
            </th>
          </tr>
        </thead>
        <tbody className="bg-white">
          {data.map(({ id, name, code, phone, email, city }) => (
            <tr key={id}>
              <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200 text-sm leading-5 font-medium text-gray-900">
                {name}
              </td>
              <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200 text-sm leading-5 text-gray-500">
                {code}
              </td>
              <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200 text-sm leading-5 text-gray-500">
                {email}
              </td>
              <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200 text-sm leading-5 text-gray-500">
                {phone}
              </td>
              <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200 text-sm leading-5 text-gray-500">
                {city}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="bg-white px-4 py-3 flex items-center justify-betwee sm:px-6 w-full">
        <div className="hidden sm:block">
          <p className="text-sm leading-5 text-gray-700">
            <span className="font-medium">{data.length}</span>
            {data.length > 1 ? ' resultados' : ' resultado'}
          </p>
        </div>
        <div className="flex-1 flex justify-between sm:justify-end">
          <Link
            to="/providers"
            className="relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm leading-5 font-medium rounded-md text-gray-700 bg-white hover:text-gray-500 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 active:bg-gray-100 active:text-gray-700 transition ease-in-out duration-150"
          >
            Anterior
          </Link>
          <Link
            to="/providers"
            className="ml-3 relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm leading-5 font-medium rounded-md text-gray-700 bg-white hover:text-gray-500 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 active:bg-gray-100 active:text-gray-700 transition ease-in-out duration-150"
          >
            Siguiente
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Table
