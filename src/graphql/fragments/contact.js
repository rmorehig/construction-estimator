import gql from 'graphql-tag';

export const CONTACT_FRAGMENT = gql`
  fragment contactFields on contact {
    id
    code
    name
    email
    phone
    city
    observations
    address
    city
    province
    postal_code
    country
    default_contact
    position
    entity_id
  }
`;
