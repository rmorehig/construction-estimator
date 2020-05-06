import gql from 'graphql-tag';
import { useMutation } from '@apollo/react-hooks';
import { useHistory } from 'react-router-dom';
import { useNotifications } from 'context/notifications';
import { GET_PROVIDER_DETAILS } from 'graphql/queries/entities/getProviderDetails';
export const UPDATE_PROVIDER = gql`
  mutation updateProvider($id: Int!, $set: entity_set_input!) {
    update_entity(where: { id: { _eq: $id } }, _set: $set) {
      returning {
        id
      }
    }
  }
`;

export const useUpdateProvider = () => {
  const { push } = useHistory();
  const { setMessage } = useNotifications();
  let [mutate, { data, loading, error }] = useMutation(UPDATE_PROVIDER, {
    onCompleted: (data) => {
      setMessage('Proveedor actualizado correctamente');
      //push(`/entities/providers/${data.update_entity.returning[0].id}`);
    },
    onError: () => push('/entities/')
  });
  return {
    updateProvider: ({
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
            query: GET_PROVIDER_DETAILS,
            variables: { id }
          }
        ]
      }),
    data,
    error,
    loading
  };
};
