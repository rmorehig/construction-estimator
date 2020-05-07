import gql from 'graphql-tag';
import { useQuery } from '@apollo/react-hooks';
import { ENTITY_FRAGMENT } from 'graphql/fragments/entity';
import { useParams, useHistory } from 'react-router-dom';

export const GET_PROVIDER_DETAILS = gql`
  query getProviderDetails($id: Int!) {
    entity: entity_by_pk(id: $id) {
      ...entityFields
    }
  }
  ${ENTITY_FRAGMENT}
`;

export const useGetProviderDetails = () => {
  const { id } = useParams();
  const history = useHistory();
  const { data, loading } = useQuery(GET_PROVIDER_DETAILS, {
    variables: {
      id
    },
    fetchPolicy: 'cache-and-network',
    onError: () => history.push('/entities')
  });

  return {
    data,
    loading
  };
};
