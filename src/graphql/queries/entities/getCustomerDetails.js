import gql from 'graphql-tag';
import { useQuery } from '@apollo/react-hooks';
import { ENTITY_FRAGMENT } from 'graphql/fragments/entity';
import { useParams, useHistory } from 'react-router-dom';

export const GET_CUSTOMER_DETAILS = gql`
  query getCustomerDetails($id: Int!) {
    entity: entity_by_pk(id: $id) {
      ...entityFields
    }
  }
  ${ENTITY_FRAGMENT}
`;

export const useGetCustomerDetails = () => {
  const { id } = useParams();
  const history = useHistory();
  const { data, loading } = useQuery(GET_CUSTOMER_DETAILS, {
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
