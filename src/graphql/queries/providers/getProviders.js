import gql from 'graphql-tag';
import { useQuery } from '@apollo/react-hooks';
import { useState } from 'react';
import { ENTITY_FRAGMENT } from 'graphql/fragments/entity';
import usePagination from 'hooks/usePagination';

export const GET_PROVIDERS = gql`
  query getProviders(
    $limit: Int
    $offset: Int
    $name: String
    $code: String
    $email: String
    $phone: String
    $city: String
    $country: String
  ) {
    provider(
      limit: $limit
      offset: $offset
      where: {
        entity: {
          name: { _ilike: $name }
          code: { _ilike: $code }
          email: { _ilike: $email }
          phone: { _ilike: $phone }
          city: { _ilike: $city }
          country: { _ilike: $country }
        }
      }
    ) {
      id
      entity {
        ...entityFields
      }
    }
    provider_aggregate(
      where: {
        entity: {
          name: { _ilike: $name }
          code: { _ilike: $code }
          email: { _ilike: $email }
          phone: { _ilike: $phone }
          city: { _ilike: $city }
          country: { _ilike: $country }
        }
      }
    ) {
      aggregate {
        count
      }
    }
  }
  ${ENTITY_FRAGMENT}
`;

export const useGetProviders = () => {
  const {
    count,
    limit,
    offset,
    nextPage,
    previousPage,
    setCount,
    filters,
    queryFilters,
    updateFilters,
    hasNext,
    hasPrevious
  } = usePagination({
    name: '',
    code: '',
    email: '',
    city: '',
    phone: ''
  });
  const [providers, setProviders] = useState([]);
  const { loading } = useQuery(GET_PROVIDERS, {
    variables: {
      limit,
      offset,
      ...queryFilters
    },
    onCompleted: (data) => {
      setProviders(data.provider);
      setCount(data.provider_aggregate.aggregate.count);
    },
    fetchPolicy: 'cache-and-network'
  });
  return {
    providers,
    count,
    limit,
    loading,
    nextPage,
    previousPage,
    filters,
    updateFilters,
    hasNext,
    hasPrevious
  };
};
