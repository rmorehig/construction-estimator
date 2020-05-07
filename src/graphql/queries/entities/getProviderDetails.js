import gql from 'graphql-tag';
import { useQuery } from '@apollo/react-hooks';
import { ENTITY_FRAGMENT } from 'graphql/fragments/entity';
import { CONTACT_FRAGMENT } from 'graphql/fragments/contact';
import { useParams, useHistory } from 'react-router-dom';
import useFilters from 'hooks/useFilters';

export const GET_PROVIDER_DETAILS = gql`
  query getProviderDetails(
    $id: Int!
    $limit: Int
    $offset: Int
    $orderBy: [contact_order_by!]
  ) {
    entity: entity_by_pk(id: $id) {
      ...entityFields
      contacts(limit: $limit, offset: $offset, order_by: $orderBy) {
        ...contactFields
      }
      contacts_aggregate {
        aggregate {
          count
        }
      }
    }
  }
  ${ENTITY_FRAGMENT}
  ${CONTACT_FRAGMENT}
`;

export const useGetProviderDetails = () => {
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
  const { data, loading } = useQuery(GET_PROVIDER_DETAILS, {
    variables: {
      id,
      limit,
      offset,
      orderBy
    },
    fetchPolicy: 'cache-and-network',
    onCompleted: (response) => {
      setCount(response.entity.contacts_aggregate.aggregate.count);
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
