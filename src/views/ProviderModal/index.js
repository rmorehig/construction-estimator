import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import Input from 'components/Input';
import Textarea from 'components/Textarea';
import Select from 'components/Select';
import Modal from 'components/Modal';
import { useAddProvider } from 'graphql/mutations/entities/addProvider';
import { GridContainer, GridItem } from 'components/Grid';
import Button from 'components/Button';
import { useUpdateProvider } from 'graphql/mutations/entities/updateProvider';

const validationSchema = Yup.object().shape({
  name: Yup.string().required('Introduce el nombre del proveedor'),
  email: Yup.string().email(
    'Introduce un email con formato válido: usuario@correo.com'
  )
});

const ProviderModal = ({ handleClose, data }) => {
  const { addProvider } = useAddProvider();
  const { updateProvider } = useUpdateProvider();
  const { values, handleBlur, handleChange, handleSubmit, errors } = useFormik({
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
      type: '',
      ...data
    },
    validateOnMount: false,
    validationSchema,
    onSubmit: (values) => {
      if (data) {
        updateProvider(values);
      } else {
        addProvider(values);
      }
      handleClose();
    }
  });

  return (
    <Modal>
      <form onSubmit={handleSubmit}>
        <div className="flex justify-between bg-blue-500 px-4 py-6 sm:px-6">
          <h3 className="text-lg leading-6 font-normal text-white">
            {`${data ? 'Editar' : 'Nuevo'} proveedor`}
          </h3>

          <button
            type="button"
            className="text-white hover:text-gray-500 focus:outline-none focus:text-gray-500 transition ease-in-out duration-150"
            onClick={handleClose}
          >
            <svg
              className="h-6 w-6"
              stroke="currentColor"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>

        <div className="px-4 py-7 border border-gray-200 sm:px-20">
          <GridContainer>
            <GridItem xs={3}>
              <Input
                name="name"
                label="Nombre"
                value={values.name}
                onBlur={handleBlur}
                onChange={handleChange}
                error={errors.name}
              />
            </GridItem>
            <GridItem xs={3}>
              <Input
                label="DNI / CIF"
                id="code"
                value={values.code}
                onChange={handleChange}
                error={errors.code}
              />
            </GridItem>
            <div className="col-span-6 lg:col-span-3">
              <Input
                name="phone"
                label="Teléfono"
                value={values.phone}
                onChange={handleChange}
                error={errors.phone}
              />
            </div>
            <div className="col-span-6 lg:col-span-3">
              <Input
                label="Email"
                name="email"
                value={values.email}
                onChange={handleChange}
                error={errors.email}
              />
            </div>
            <div className="col-span-6 lg:col-span-4">
              <Input
                label="Dirección"
                name="address"
                value={values.address}
                onChange={handleChange}
                error={errors.address}
              />
            </div>
            <div className="col-span-6 lg:col-span-2">
              <Input
                label="Código postal"
                name="postal_code"
                value={values.postal_code}
                onChange={handleChange}
                error={errors.postal_code}
              />
            </div>
            <div className="col-span-6 lg:col-span-2">
              <Input
                name="city"
                label="Ciudad"
                value={values.city}
                onChange={handleChange}
              />
            </div>
            <div className="col-span-6 lg:col-span-2">
              <Input
                name="province"
                label="Provincia"
                value={values.province}
                onChange={handleChange}
              />
            </div>
            <div className="col-span-6 sm:col-span-3 lg:col-span-2">
              <Select
                name="country"
                label="País"
                value={values.country}
                onChange={handleChange}
              >
                <option>España</option>
                <option>Estados Unidos</option>
                <option>Francia</option>
              </Select>
            </div>

            <GridItem>
              <Input
                label="Web"
                id="website"
                value={values.website}
                onChange={handleChange}
                error={errors.website}
              />
            </GridItem>
            <GridItem>
              <Textarea
                id="observations"
                label="Observaciones"
                value={values.observations}
                onChange={handleChange}
                rows="3"
                className="form-textarea mt-1 block w-full transition duration-150 ease-in-out sm:text-sm sm:leading-5"
              />
            </GridItem>
          </GridContainer>
        </div>

        <div className="bg-white px-4 py-5 sm:px-6 sm:flex sm:flex-row-reverse">
          <Button type="submit" primary className="sm:ml-3">
            Guardar
          </Button>
          <Button type="button" className="mt-2 sm:mt-0" onClick={handleClose}>
            Cancelar
          </Button>
        </div>
      </form>
    </Modal>
  );
};

export default ProviderModal;
