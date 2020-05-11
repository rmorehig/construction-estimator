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
        __typename
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
        update: (cache, { data: { insert_contact } }) => {
          const newContact = insert_contact.returning[0];
          const { contact, contact_aggregate } = cache.readQuery({
            query: GET_CONTACTS_BY_ENTITY,
            variables: {
              id: Number(newContact.entity_id),
              limit: 5,
              offset: 0,
              orderBy: { default_contact: 'desc' }
            }
          });
          cache.writeQuery({
            query: GET_CONTACTS_BY_ENTITY,
            variables: {
              id: Number(newContact.entity_id),
              limit: 5,
              offset: 0,
              orderBy: { default_contact: 'desc' }
            },
            data: {
              contact: [...contact, newContact],
              contact_aggregate: {
                aggregate: {
                  count: contact_aggregate.aggregate.count + 1,
                  __typename: 'contact_aggregate_fields'
                },
                __typename: 'contact_aggregate'
              }
            }
          });
        }
      }),
    data,
    error,
    loading
  };
};
