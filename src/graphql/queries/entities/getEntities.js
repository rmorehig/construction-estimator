import gql from 'graphql-tag';
import { useQuery } from '@apollo/react-hooks';
import { ENTITY_FRAGMENT } from 'graphql/fragments/entity';
import useFilters from 'hooks/useFilters';
import { useState } from 'react';

export const GET_ENTITIES = gql`
  query getEntities(
    $limit: Int
    $offset: Int
    $where: entity_bool_exp
    $orderBy: [entity_order_by!]
  ) {
    entity(limit: $limit, offset: $offset, order_by: $orderBy, where: $where) {
      ...entityFields
    }

    entity_aggregate(where: $where) {
      aggregate {
        count
      }
    }
  }
  ${ENTITY_FRAGMENT}
`;

export const useGetEntities = (type = {}) => {
  const [data, setData] = useState([]);
  const {
    count,
    setCount,
    limit,
    offset,
    nextPage,
    page,
    previousPage,
    hasNext,
    hasPrevious,
    where,
    search,
    handleSearch,
    orderBy,
    handleOrderBy
  } = useFilters({
    filters: ['name', 'email', 'city', 'phone'],
    search: '',
    orderBy: { name: 'asc' }
  });

  const { loading } = useQuery(GET_ENTITIES, {
    variables: {
      limit,
      offset,
      where: { ...where, ...type },
      orderBy
    },
    fetchPolicy: 'cache-and-network',
    onCompleted: (response) => {
      setData(response.entity);
      setCount(response.entity_aggregate.aggregate.count);
    }
  });

  return {
    data,
    count,
    offset,
    limit,
    page,
    loading,
    nextPage,
    previousPage,
    hasNext,
    hasPrevious,
    search,
    handleSearch,
    orderBy,
    handleOrderBy
  };
};
