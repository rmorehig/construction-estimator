import React from 'react'
import View from 'components/view'
import { useFormik } from 'formik'
import { useAddProvider } from 'graphql/mutations/providers/addProvider'
import Button from 'components/button'
import { useHistory } from 'react-router-dom'
import Input from 'components/input'
import Textarea from 'components/textarea'
import Select from 'components/select'
import * as Yup from 'yup'

const validationSchema = Yup.object().shape({
  name: Yup.string().required('Introduce el nombre del proveedor'),
  email: Yup.string().email(
    'Introduce un email con formato válido: you@example.com'
  ),
})

const ProvidersNew = () => {
  const { addProvider } = useAddProvider()
  const history = useHistory()
  const { values, handleChange, handleSubmit, errors } = useFormik({
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
    validationSchema,
    onSubmit: values => addProvider(values),
  })
  return (
    <View
      title="Nuevo proveedor"
      actions={
        <div className="flex">
          <Button onClick={() => history.goBack()} variant="none">
            Cancelar
          </Button>
          <Button onClick={handleSubmit} variant="primary">
            Guardar
          </Button>
        </div>
      }
    >
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
                  <Input
                    id="name"
                    label="Nombre"
                    value={values.name}
                    onChange={handleChange}
                    error={errors.name}
                  />
                </div>
                <div class="col-span-6">
                  <Input
                    id="phone"
                    label="Teléfono"
                    value={values.phone}
                    onChange={handleChange}
                    error={errors.phone}
                  />
                </div>
                <div class="col-span-6">
                  <Input
                    label="Email"
                    id="email"
                    value={values.email}
                    onChange={handleChange}
                    error={errors.email}
                    placeholder="you@example.com"
                  />
                </div>
                <div class="col-span-6">
                  <Input
                    label="Código"
                    id="code"
                    value={values.code}
                    onChange={handleChange}
                    error={errors.code}
                  />
                </div>

                <div class="col-span-6">
                  <Input
                    label="Web"
                    id="website"
                    value={values.website}
                    onChange={handleChange}
                    error={errors.website}
                    placeholder="www.example.com"
                  />
                </div>

                <div class="col-span-6 lg:col-span-4">
                  <Input
                    label="Dirección"
                    id="address"
                    value={values.address}
                    onChange={handleChange}
                    error={errors.address}
                  />
                </div>
                <div class="col-span-6 lg:col-span-2">
                  <Input
                    label="Código postal"
                    id="postal_code"
                    value={values.postal_code}
                    onChange={handleChange}
                    error={errors.postal_code}
                  />
                </div>
                <div class="col-span-6 lg:col-span-2">
                  <Input
                    id="city"
                    label="Ciudad"
                    value={values.city}
                    onChange={handleChange}
                  />
                </div>
                <div class="col-span-6 lg:col-span-2">
                  <Input
                    id="province"
                    label="Provincia"
                    value={values.province}
                    onChange={handleChange}
                  />
                </div>
                <div class="col-span-6 sm:col-span-3 lg:col-span-2">
                  <Select
                    id="country"
                    label="País"
                    value={values.country}
                    onChange={handleChange}
                  >
                    <option>España</option>
                    <option>Estados Unidos</option>
                    <option>Francia</option>
                  </Select>
                </div>
              </div>

              <div class="mt-6">
                <Textarea
                  id="observations"
                  label="Observaciones"
                  value={values.observations}
                  onChange={handleChange}
                  rows="3"
                  class="form-textarea mt-1 block w-full transition duration-150 ease-in-out sm:text-sm sm:leading-5"
                />
              </div>
            </form>
          </div>
        </div>
      </div>
      <div className="mt-6 bg-white shadow px-4 py-5 sm:rounded-lg sm:p-6">
        <div className="md:grid md:grid-cols-3 md:gap-6">
          <div className="md:col-span-1">
            <h3 className="text-lg font-medium leading-6 text-gray-900">
              Contactos
            </h3>
            <p className="mt-1 text-sm leading-5 text-gray-500">
              Añade contactos al proveedor.
            </p>
          </div>
          <div className="mt-5 md:mt-0 md:col-span-2">
            <form action="#" method="POST"></form>
          </div>
        </div>
      </div>
      <div className="mt-6 bg-white shadow px-4 py-5 sm:rounded-lg sm:p-6">
        <div className="md:grid md:grid-cols-3 md:gap-6">
          <div className="md:col-span-1">
            <h3 className="text-lg font-medium leading-6 text-gray-900">
              Materiales
            </h3>
            <p className="mt-1 text-sm leading-5 text-gray-500">
              Selecciona los materiales del proveedor.
            </p>
          </div>
          <div className="mt-5 md:mt-0 md:col-span-2">
            <form action="#" method="POST"></form>
          </div>
        </div>
      </div>
      <div className="mt-6 bg-white shadow px-4 py-5 sm:rounded-lg sm:p-6">
        <div className="md:grid md:grid-cols-3 md:gap-6">
          <div className="md:col-span-1">
            <h3 className="text-lg font-medium leading-6 text-gray-900">
              Servicios
            </h3>
            <p className="mt-1 text-sm leading-5 text-gray-500">
              Selecciona los servicios del proveedor.
            </p>
          </div>
          <div className="mt-5 md:mt-0 md:col-span-2">
            <form action="#" method="POST"></form>
          </div>
        </div>
      </div>
      <div className="mt-6 bg-white shadow px-4 py-5 sm:rounded-lg sm:p-6">
        <div className="md:grid md:grid-cols-3 md:gap-6">
          <div className="md:col-span-1">
            <h3 className="text-lg font-medium leading-6 text-gray-900">
              Trabajadores
            </h3>
            <p className="mt-1 text-sm leading-5 text-gray-500">
              Añade trabajadores a cargo del proveedor.
            </p>
          </div>
          <div className="mt-5 md:mt-0 md:col-span-2">
            <form action="#" method="POST"></form>
          </div>
        </div>
      </div>
    </View>
  )
}

export default ProvidersNew
