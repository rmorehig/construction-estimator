import gql from 'graphql-tag';

export const ENTITY_FRAGMENT = gql`
  fragment entityFields on entity {
    id
    code
    name
    email
    phone
    city
    website
    observations
    address
    city
    province
    postal_code
    country
  }
`;
