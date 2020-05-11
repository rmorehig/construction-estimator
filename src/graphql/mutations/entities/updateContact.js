import gql from 'graphql-tag';
import { useMutation } from '@apollo/react-hooks';
import { useHistory } from 'react-router-dom';
import { useNotifications } from 'context/notifications';
import { GET_CONTACTS_BY_ENTITY } from 'graphql/queries/entities/getContactsByEntity';

export const UPDATE_CONTACT = gql`
  mutation updateContact($id: Int!, $set: contact_set_input!) {
    update_contact(where: { id: { _eq: $id } }, _set: $set) {
      returning {
        id
      }
    }
  }
`;

export const useUpdateContact = () => {
  const { push } = useHistory();
  const { setMessage } = useNotifications();
  let [mutate, { data, loading, error }] = useMutation(UPDATE_CONTACT, {
    onCompleted: (data) => {
      setMessage('Contacto actualizado correctamente');
    },
    onError: () => push('/entities/')
  });
  return {
    updateContact: ({
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
            query: GET_CONTACTS_BY_ENTITY,
            variables: { id }
          }
        ]
      }),
    data,
    error,
    loading
  };
};
