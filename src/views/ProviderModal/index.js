import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useHistory } from 'react-router-dom';
import Input from 'components/Input';
import Textarea from 'components/Textarea';
import Select from 'components/Select';
import Modal from 'components/Modal';
import Resources from './Resources';
import { useAddProvider } from 'graphql/mutations/providers/addProvider';
import { useSteps } from 'hooks/useSteps';
import { GridContainer, GridItem } from 'components/Grid';
import { isEmpty } from 'utils/helpers';

const validationSchema = Yup.object().shape({
  name: Yup.string().required('Introduce el nombre del proveedor'),
  email: Yup.string().email(
    'Introduce un email con formato válido: usuario@correo.com'
  )
});

const ProviderModal = () => {
  const { addProvider } = useAddProvider();
  const history = useHistory();
  const { steps, currentStep, nextStep, previousStep, setStep } = useSteps([
    '1. Detalles',
    '2. Recursos',
    '3. Opcional'
  ]);
  const {
    values,
    handleBlur,
    handleChange,
    handleSubmit,
    errors,
    validateForm
  } = useFormik({
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
      type: ''
    },
    validateOnMount: false,
    validationSchema,
    onSubmit: (values) => {
      addProvider(values);
    }
  });

  const handleSteps = async (event, index) => {
    event.preventDefault();
    const errors = await validateForm();
    if (isEmpty(errors)) {
      setStep(index);
    }
  };

  const handleNextStep = async (event) => {
    event.preventDefault();
    const errors = await validateForm();
    if (isEmpty(errors)) {
      nextStep();
    }
  };

  return (
    <Modal>
      <form onSubmit={handleSubmit}>
        <div className="flex justify-between bg-blue-500 px-4 py-6 sm:px-6">
          <h3 className="text-lg leading-6 font-normal text-white">
            Nuevo proveedor
          </h3>

          <button
            type="button"
            class="text-white hover:text-gray-500 focus:outline-none focus:text-gray-500 transition ease-in-out duration-150"
            onClick={() => history.push('/entities')}
          >
            <svg
              class="h-6 w-6"
              stroke="currentColor"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
        <div>
          <div className="hidden sm:block">
            <div className="border-b border-gray-200">
              <nav className="-mb-px flex">
                {steps.map((step, index) => (
                  <button
                    key={index}
                    type="button"
                    className={`w-1/2 py-4 px-1 text-center border-b-2  font-medium text-sm leading-5 focus:outline-none ${
                      index === currentStep
                        ? 'border-blue-500 text-blue-600'
                        : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                    }`}
                    aria-current="step"
                    onClick={(event) => handleSteps(event, index)}
                  >
                    {step}
                  </button>
                ))}
              </nav>
            </div>
          </div>
        </div>
        <div className="px-4 py-7 border-b border-gray-200 sm:px-20">
          {currentStep === 0 && (
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
            </GridContainer>
          )}
          {currentStep === 1 && <Resources />}
          {currentStep === 2 && (
            <GridContainer>
              <GridItem>
                <Input
                  label="Código"
                  id="code"
                  value={values.code}
                  onChange={handleChange}
                  error={errors.code}
                />
              </GridItem>

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
          )}
        </div>

        <div className="bg-white px-4 py-5 sm:px-6 sm:flex sm:flex-row-reverse">
          {currentStep === steps.length - 1 && (
            <span className="flex w-full rounded-md shadow-sm sm:ml-3 sm:w-auto">
              <button
                type="submit"
                className="inline-flex justify-center w-full rounded-md border border-transparent px-4 py-2 bg-blue-500 text-base leading-6 font-medium text-white shadow-sm hover:bg-blue-600 focus:outline-none focus:border-blue-700 focus:shadow-outline-blue transition ease-in-out duration-150 sm:text-sm sm:leading-5"
              >
                Guardar
              </button>
            </span>
          )}
          {currentStep < steps.length - 1 && (
            <span className="flex w-full rounded-md shadow-sm sm:ml-3 sm:w-auto">
              <button
                type="button"
                className="inline-flex justify-center w-full rounded-md border border-transparent px-4 py-2 bg-blue-500 text-base leading-6 font-medium text-white shadow-sm hover:bg-blue-600 focus:outline-none focus:border-blue-700 focus:shadow-outline-blue transition ease-in-out duration-150 sm:text-sm sm:leading-5"
                onClick={handleNextStep}
              >
                Siguiente
              </button>
            </span>
          )}
          {currentStep === 0 ? (
            <span className="flex w-full rounded-md shadow-sm sm:mt-0 sm:w-auto">
              <button
                type="button"
                className="inline-flex justify-center w-full rounded-md border border-gray-300 px-4 py-2 bg-white text-base leading-6 font-medium text-gray-700 shadow-sm hover:text-gray-500 focus:outline-none focus:border-blue-300 focus:shadow-outline transition ease-in-out duration-150 sm:text-sm sm:leading-5"
                onClick={() => history.push('/entities')}
              >
                Cancelar
              </button>
            </span>
          ) : (
            <span className="flex w-full rounded-md shadow-sm sm:mt-0 sm:w-auto">
              <button
                type="button"
                className="inline-flex justify-center w-full rounded-md border border-gray-300 px-4 py-2 bg-white text-base leading-6 font-medium text-gray-700 shadow-sm hover:text-gray-500 focus:outline-none focus:border-blue-300 focus:shadow-outline transition ease-in-out duration-150 sm:text-sm sm:leading-5"
                onClick={previousStep}
              >
                Atrás
              </button>
            </span>
          )}
        </div>
      </form>
    </Modal>
  );
};

export default ProviderModal;
