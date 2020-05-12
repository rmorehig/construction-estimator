import gql from 'graphql-tag';
import { useMutation } from '@apollo/react-hooks';
import { useNotifications } from 'context/notifications';
import { CONTACT_FRAGMENT } from 'graphql/fragments/contact';
import { GET_CONTACTS_BY_ENTITY } from 'graphql/queries/entities/getContactsByEntity';

export const DELETE_CONTACT = gql`
  mutation deleteContact($id: Int!) {
    delete_contact(where: { id: { _eq: $id } }) {
      affected_rows
      returning {
        ...contactFields
      }
    }
  }
  ${CONTACT_FRAGMENT}
`;

export const useAddContact = () => {
  const { setMessage } = useNotifications();
  let [mutate, { data, loading, error }] = useMutation(DELETE_CONTACT, {
    onCompleted: () => {
      setMessage('Contacto eliminado correctamente');
    },
    onError: () => {
      setMessage(
        'Error al eliminar el contacto seleccionado. Inténtelo de nuevo.'
      );
    }
  });
  return {
    addContact: (values) =>
      mutate({
        variables: {
          objects: values
        },
        refetchQueries: [
          {
            query: GET_CONTACTS_BY_ENTITY,
            variables: {
              id: values.entity_id,
              limit: 5,
              offset: 0,
              orderBy: { default_contact: 'desc' }
            }
          }
        ]
      }),
    data,
    error,
    loading
  };
};
