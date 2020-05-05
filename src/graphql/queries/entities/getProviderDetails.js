import gql from 'graphql-tag';
import { useQuery } from '@apollo/react-hooks';
import { ENTITY_FRAGMENT } from 'graphql/fragments/entity';
import { useState } from 'react';
import { useParams } from 'react-router-dom';

export const GET_PROVIDER_DETAILS = gql`
  query getProviderDetails($id: Int!) {
    entity_by_pk(id: $id) {
      ...entityFields
    }
  }
  ${ENTITY_FRAGMENT}
`;

export const useGetProviderDetails = () => {
  const [data, setData] = useState([]);
  const { id } = useParams();
  const { loading } = useQuery(GET_PROVIDER_DETAILS, {
    variables: {
      id
    },
    fetchPolicy: 'cache-and-network',
    onCompleted: (response) => {
      setData(response.entity_by_pk);
    }
  });

  return {
    data,
    loading
  };
};
