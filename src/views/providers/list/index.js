import React from 'react'
import Filter from './filter'

const ProvidersList = ({
  providers = [],
  count,
  nextPage,
  previousPage,
  filters,
  updateFilters,
}) => {
  return (
    <div className="flex flex-col">
      <div className="-my-2 py-2 overflow-x-auto sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8">
        <div className="align-middle inline-block min-w-full shadow overflow-hidden sm:rounded-lg border-b border-gray-200">
          <table className="min-w-full">
            <thead>
              <tr>
                <th className="px-6 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                  <Filter
                    title="Nombre"
                    value={filters.name}
                    onChange={event =>
                      updateFilters({ name: event.target.value })
                    }
                  />
                </th>
                <th className="px-6 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                  <Filter
                    title="Código"
                    value={filters.code}
                    onChange={event =>
                      updateFilters({ code: event.target.value })
                    }
                  />
                </th>
                <th className="px-6 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                  <Filter
                    title="Email"
                    value={filters.email}
                    onChange={event =>
                      updateFilters({ email: event.target.value })
                    }
                  />
                </th>
                <th className="px-6 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                  <Filter
                    title="Teléfono"
                    value={filters.phone}
                    onChange={event =>
                      updateFilters({ phone: event.target.value })
                    }
                  />
                </th>
                <th className="px-6 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                  <Filter
                    title="Ciudad"
                    value={filters.city}
                    onChange={event =>
                      updateFilters({ city: event.target.value })
                    }
                  />
                </th>
              </tr>
            </thead>
            <tbody className="bg-white">
              {providers.map(({ id, entity }) => {
                const { name, code, phone, email, city } = entity
                return (
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
                )
              })}
            </tbody>
          </table>
          <div className="bg-white px-4 py-3 flex items-center justify-betwee sm:px-6 w-full">
            <div className="hidden sm:block">
              <p className="text-sm leading-5 text-gray-700">
                <span className="font-medium">{count}</span>
                {count > 1 ? ' resultados' : ' resultado'}
              </p>
            </div>
            <div className="flex-1 flex justify-between sm:justify-end">
              <button
                className="relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm leading-5 font-medium rounded-md text-gray-700 bg-white hover:text-gray-500 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 active:bg-gray-100 active:text-gray-700 transition ease-in-out duration-150"
                onClick={previousPage}
              >
                Anterior
              </button>
              <button
                className="ml-3 relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm leading-5 font-medium rounded-md text-gray-700 bg-white hover:text-gray-500 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 active:bg-gray-100 active:text-gray-700 transition ease-in-out duration-150"
                onClick={nextPage}
              >
                Siguiente
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProvidersList
