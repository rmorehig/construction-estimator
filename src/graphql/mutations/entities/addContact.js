import gql from 'graphql-tag';
import { useMutation } from '@apollo/react-hooks';
import { useHistory } from 'react-router-dom';
import { useNotifications } from 'context/notifications';
import { CONTACT_FRAGMENT } from 'graphql/fragments/contact';
import { GET_CONTACTS_BY_ENTITY } from 'graphql/queries/entities/getContactsByEntity';

export const ADD_CONTACT = gql`
  mutation addContact($objects: [contact_insert_input!]!) {
    insert_contact(objects: $objects) {
      affected_rows
      returning {
        ...contactFields
      }
    }
  }
  ${CONTACT_FRAGMENT}
`;

export const useAddContact = () => {
  const { push } = useHistory();

  const { setMessage } = useNotifications();
  let [mutate, { data, loading, error }] = useMutation(ADD_CONTACT, {
    onCompleted: () => {
      setMessage('Contacto creado correctamente');
    },
    onError: () => push('/entities')
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
              id: Number(values.entity_id),
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
