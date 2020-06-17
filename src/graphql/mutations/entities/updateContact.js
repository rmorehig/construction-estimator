import gql from 'graphql-tag';
import { useMutation } from '@apollo/react-hooks';
import { useHistory } from 'react-router-dom';
import { useNotifications } from 'context/notifications';
import { GET_CONTACTS_BY_ENTITY } from 'graphql/queries/entities/getContactsByEntity';
import { CONTACT_FRAGMENT } from 'graphql/fragments/contact';

export const UPDATE_CONTACT = gql`
  mutation updateContact($id: Int!, $set: contact_set_input!) {
    update_contact(where: { id: { _eq: $id } }, _set: $set) {
      affected_rows
      returning {
        ...contactFields
      }
    }
  }
  ${CONTACT_FRAGMENT}
`;

export const useUpdateContact = () => {
  const { push } = useHistory();
  const { setMessage } = useNotifications();
  let [mutate, { data, loading, error }] = useMutation(UPDATE_CONTACT, {
    onCompleted: () => {
      setMessage('Contact updated successfully');
    },
    onError: () => push('/entities/')
  });
  return {
    updateContact: ({ id, ...values }) =>
      mutate({
        variables: {
          id,
          set: {
            ...values,
            __typename: undefined
          }
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
