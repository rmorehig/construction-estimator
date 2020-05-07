import gql from 'graphql-tag';
import { useQuery } from '@apollo/react-hooks';
import { CONTACT_FRAGMENT } from 'graphql/fragments/contact';
import { useParams, useHistory } from 'react-router-dom';
import useFilters from 'hooks/useFilters';

export const GET_CONTACTS_BY_ENTITY = gql`
  query getContactsByEntity(
    $id: Int!
    $limit: Int
    $offset: Int
    $orderBy: [contact_order_by!]
  ) {
    contacts: contact(
      limit: $limit
      offset: $offset
      order_by: $orderBy
      where: { entity_id: { _eq: $id } }
    ) {
      ...contactFields
    }
    contact_aggregate(where: { entity_id: { _eq: $id } }) {
      aggregate {
        count
      }
    }
  }
  ${CONTACT_FRAGMENT}
`;

export const useGetContactsByEntity = () => {
  const { id } = useParams();
  const history = useHistory();
  const {
    count,
    setCount,
    limit,
    offset,
    nextPage,
    previousPage,
    orderBy
  } = useFilters({
    limit: 5,
    filters: ['name'],
    search: '',
    orderBy: { default_contact: 'desc' }
  });
  const { data, loading } = useQuery(GET_CONTACTS_BY_ENTITY, {
    variables: {
      id,
      limit,
      offset,
      orderBy
    },
    fetchPolicy: 'cache-and-network',
    onCompleted: (response) => {
      setCount(response.contact_aggregate.aggregate.count);
    },
    onError: () => history.push('/entities')
  });

  return {
    data,
    loading,
    count,
    nextPage,
    previousPage
  };
};
