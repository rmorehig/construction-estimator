import gql from 'graphql-tag';
import { useMutation } from '@apollo/react-hooks';
import { useHistory } from 'react-router-dom';
import { useNotifications } from 'context/notifications';
import { GET_CUSTOMER_DETAILS } from 'graphql/queries/entities/getCustomerDetails';

export const UPDATE_CUSTOMER = gql`
  mutation updateCusomer($id: Int!, $set: entity_set_input!) {
    update_entity(where: { id: { _eq: $id } }, _set: $set) {
      returning {
        id
      }
    }
  }
`;

export const useUpdateCustomer = () => {
  const { push } = useHistory();
  const { setMessage } = useNotifications();
  let [mutate, { data, loading, error }] = useMutation(UPDATE_CUSTOMER, {
    onCompleted: (data) => {
      setMessage('Customer updated successfully');
    },
    onError: () => push('/entities/')
  });
  return {
    updateCustomer: ({
      id,
      name,
      code,
      website,
      email,
      phone,
      address,
      postal_code,
      city,
      province,
      country
    }) =>
      mutate({
        variables: {
          id,
          set: {
            name,
            code,
            website,
            email,
            phone,
            address,
            postal_code,
            city,
            province,
            country
          }
        },
        refetchQueries: [
          {
            query: GET_CUSTOMER_DETAILS,
            variables: { id }
          }
        ]
      }),
    data,
    error,
    loading
  };
};
