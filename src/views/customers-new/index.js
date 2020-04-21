import React from 'react'
import View from 'components/view'
import { useFormik } from 'formik'
import { useAddCustomer } from 'graphql/mutations/customers/addCustomer'
const Action = ({ onClick = () => {} }) => (
  <span class="inline-flex rounded-md shadow-sm">
    <button
      type="button"
      class="relative inline-flex items-center px-4 py-2 border border-transparent text-sm leading-5 font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:shadow-outline-indigo focus:border-indigo-700 active:bg-indigo-700"
      onClick={onClick}
    >
      Guardar
    </button>
  </span>
)
const CustomersNew = () => {
  const { addCustomer } = useAddCustomer()
  const { values, handleChange, handleSubmit } = useFormik({
    initialValues: {
      name: '',
      code: '',
      website: '',
      email: '',
      phone: '',
      address: '',
      postal_code: '',
      city: '',
      province: '',
      country: '',
    },
    onSubmit: values => addCustomer(values),
  })
  return (
    <View title="Nuevo cliente" action={<Action onClick={handleSubmit} />}>
      <div class="bg-white shadow px-4 py-5 sm:rounded-lg sm:p-6">
        <div class="md:grid md:grid-cols-3 md:gap-6">
          <div class="md:col-span-1">
            <h3 class="text-lg font-medium leading-6 text-gray-900">Perfil</h3>
            <p class="mt-1 text-sm leading-5 text-gray-500">
              Información general del cliente.
            </p>
          </div>
          <div class="mt-5 md:mt-0 md:col-span-2">
            <form onSubmit={handleSubmit}>
              <div class="grid grid-cols-6 gap-6">
                <div class="col-span-6">
                  <label
                    for="name"
                    class="block text-sm font-medium leading-5 text-gray-700"
                  >
                    Nombre
                  </label>
                  <input
                    id="name"
                    value={values.name}
                    onChange={handleChange}
                    class="mt-1 form-input block w-full py-2 px-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5"
                  />
                </div>

                <div class="col-span-6">
                  <label
                    for="code"
                    class="block text-sm font-medium leading-5 text-gray-700"
                  >
                    Código
                  </label>
                  <input
                    id="code"
                    value={values.code}
                    onChange={handleChange}
                    class="mt-1 form-input block w-full py-2 px-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5"
                  />
                </div>
                <div class="col-span-6">
                  <label
                    for="phone"
                    class="block text-sm font-medium leading-5 text-gray-700"
                  >
                    Teléfono
                  </label>
                  <div class="mt-1 flex rounded-md shadow-sm">
                    <input
                      id="phone"
                      class="form-input flex-1 block w-full rounded-none rounded-md transition duration-150 ease-in-out sm:text-sm sm:leading-5"
                    />
                  </div>
                </div>
                <div class="col-span-6">
                  <label
                    for="website"
                    class="block text-sm font-medium leading-5 text-gray-700"
                  >
                    Web
                  </label>
                  <div class="mt-1 flex rounded-md shadow-sm">
                    <span class="inline-flex items-center px-3 rounded-l-md border border-r-0 border-gray-300 bg-gray-50 text-gray-500 text-sm">
                      http://
                    </span>
                    <input
                      id="website"
                      value={values.website}
                      onChange={handleChange}
                      class="form-input flex-1 block w-full rounded-none rounded-r-md transition duration-150 ease-in-out sm:text-sm sm:leading-5"
                      placeholder="www.example.com"
                    />
                  </div>
                </div>
                <div class="col-span-6">
                  <label
                    for="email"
                    class="block text-sm font-medium leading-5 text-gray-700"
                  >
                    Email
                  </label>
                  <input
                    id="email"
                    value={values.email}
                    onChange={handleChange}
                    placeholder="you@example.com"
                    class="mt-1 form-input block w-full py-2 px-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5"
                  />
                </div>

                <div class="col-span-6 lg:col-span-4">
                  <label
                    for="address"
                    class="block text-sm font-medium leading-5 text-gray-700"
                  >
                    Dirección
                  </label>
                  <input
                    id="address"
                    value={values.address}
                    onChange={handleChange}
                    class="mt-1 form-input block w-full py-2 px-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5"
                  />
                </div>
                <div class="col-span-6 lg:col-span-2">
                  <label
                    for="postal_code"
                    class="block text-sm font-medium leading-5 text-gray-700"
                  >
                    Código postal
                  </label>
                  <input
                    id="postal_code"
                    value={values.postal_code}
                    onChange={handleChange}
                    class="mt-1 form-input block w-full py-2 px-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5"
                  />
                </div>
                <div class="col-span-6 lg:col-span-2">
                  <label
                    for="city"
                    class="block text-sm font-medium leading-5 text-gray-700"
                  >
                    Población
                  </label>
                  <input
                    id="city"
                    value={values.city}
                    onChange={handleChange}
                    class="mt-1 form-input block w-full py-2 px-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5"
                  />
                </div>

                <div class="col-span-6 lg:col-span-2">
                  <label
                    for="state"
                    class="block text-sm font-medium leading-5 text-gray-700"
                  >
                    Provincia
                  </label>
                  <input
                    id="province"
                    value={values.province}
                    onChange={handleChange}
                    class="mt-1 form-input block w-full py-2 px-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5"
                  />
                </div>
                <div class="col-span-6 sm:col-span-3 lg:col-span-2">
                  <label
                    for="country"
                    class="block text-sm font-medium leading-5 text-gray-700"
                  >
                    País
                  </label>
                  <select
                    id="country"
                    value={values.country}
                    onChange={handleChange}
                    class="mt-1 block form-select w-full py-2 px-3 py-0 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5"
                  >
                    <option>España</option>
                    <option>Estados Unidos</option>
                    <option>Francia</option>
                  </select>
                </div>
              </div>

              <div class="mt-6">
                <label
                  for="observations"
                  class="block text-sm leading-5 font-medium text-gray-700"
                >
                  Observaciones
                </label>
                <div class="rounded-md shadow-sm">
                  <textarea
                    id="observations"
                    value={values.observations}
                    onChange={handleChange}
                    rows="3"
                    class="form-textarea mt-1 block w-full transition duration-150 ease-in-out sm:text-sm sm:leading-5"
                  ></textarea>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div class="mt-6 bg-white shadow px-4 py-5 sm:rounded-lg sm:p-6">
        <div class="md:grid md:grid-cols-3 md:gap-6">
          <div class="md:col-span-1">
            <h3 class="text-lg font-medium leading-6 text-gray-900">
              Contactos
            </h3>
            <p class="mt-1 text-sm leading-5 text-gray-500">
              Añade contactos al cliente.
            </p>
          </div>
          <div class="mt-5 md:mt-0 md:col-span-2">
            <form action="#" method="POST"></form>
          </div>
        </div>
      </div>
    </View>
  )
}

export default CustomersNew
