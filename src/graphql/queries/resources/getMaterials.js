import gql from 'graphql-tag';
import { useQuery } from '@apollo/react-hooks';
import { MATERIAL_FRAGMENT } from 'graphql/fragments/material';
import useFilters from 'hooks/useFilters';
import { useState } from 'react';

export const GET_MATERIALS = gql`
  query getMaterials(
    $limit: Int
    $offset: Int
    $where: material_bool_exp
    $orderBy: [material_order_by!]
  ) {
    material(
      limit: $limit
      offset: $offset
      order_by: $orderBy
      where: $where
    ) {
      ...materialFields
    }
    material_aggregate(where: $where) {
      aggregate {
        count
      }
    }
  }
  ${MATERIAL_FRAGMENT}
`;

export const useGetMaterials = () => {
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
    filters: ['name', 'model', 'manufacturer'],
    search: '',
    orderBy: { name: 'asc' }
  });

  const { loading } = useQuery(GET_MATERIALS, {
    variables: {
      limit,
      offset,
      where: { ...where },
      orderBy
    },
    fetchPolicy: 'cache-and-network',
    onCompleted: (response) => {
      setData(response.material);
      setCount(response.material_aggregate.aggregate.count);
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
