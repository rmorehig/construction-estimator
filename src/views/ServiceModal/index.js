import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import Input from 'components/Input';
import Select from 'components/Select';
import Modal from 'components/Modal';
import { useAddMaterial } from 'graphql/mutations/resources/addMaterial';
import { GridContainer, GridItem } from 'components/Grid';

const validationSchema = Yup.object().shape({
  name: Yup.string().required('Introduce el nombre del servicio')
});

const ServiceModal = ({ handleClose, data }) => {
  const { addMaterial } = useAddMaterial();
  const { values, handleBlur, handleChange, handleSubmit, errors } = useFormik({
    initialValues: {
      name: '',
      model: '',
      manufacturer: '',
      material_type_id: null,
      ...data
    },
    validateOnMount: false,
    validationSchema,
    onSubmit: (values) => {
      addMaterial(values);
    }
  });

  return (
    <Modal>
      <form onSubmit={handleSubmit}>
        <div className="flex justify-between bg-blue-500 px-4 py-6 sm:px-6">
          <h3 className="text-lg leading-6 font-normal text-white">
            Nuevo servicio
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
            <GridItem>
              <Input
                name="name"
                label="Nombre"
                value={values.name}
                onBlur={handleBlur}
                onChange={handleChange}
                error={errors.name}
              />
            </GridItem>
            <GridItem>
              <Input
                label="Modelo"
                id="model"
                value={values.model}
                onChange={handleChange}
                error={errors.model}
              />
            </GridItem>
            <GridItem>
              <Input
                name="manufacturer"
                label="Marca"
                value={values.manufacturer}
                onChange={handleChange}
                error={errors.manufacturer}
              />
            </GridItem>
            <GridItem>
              <Select
                name="type"
                label="Tipo"
                value={values.material_type_id}
                onChange={handleChange}
              >
                <option></option>
                <option value="1">Arenas y gravas</option>
              </Select>
            </GridItem>
          </GridContainer>
        </div>

        <div className="bg-white px-4 py-5 sm:px-6 sm:flex sm:flex-row-reverse">
          <span className="flex w-full rounded-md shadow-sm sm:ml-3 sm:w-auto">
            <button
              type="submit"
              className="inline-flex justify-center w-full rounded-md border border-transparent px-4 py-2 bg-blue-500 text-base leading-6 font-medium text-white shadow-sm hover:bg-blue-600 focus:outline-none focus:border-blue-700 focus:shadow-outline-blue transition ease-in-out duration-150 sm:text-sm sm:leading-5"
            >
              Guardar
            </button>
          </span>

          <span className="flex w-full rounded-md shadow-sm sm:mt-0 sm:w-auto">
            <button
              type="button"
              className="inline-flex justify-center w-full rounded-md border border-gray-300 px-4 py-2 bg-white text-base leading-6 font-medium text-gray-700 shadow-sm hover:text-gray-500 focus:outline-none focus:border-blue-300 focus:shadow-outline transition ease-in-out duration-150 sm:text-sm sm:leading-5"
              onClick={handleClose}
            >
              Cancelar
            </button>
          </span>
        </div>
      </form>
    </Modal>
  );
};

export default ServiceModal;
