import gql from 'graphql-tag';

export const MATERIAL_FRAGMENT = gql`
  fragment materialFields on material {
    id
    name
    model
    manufacturer
    material_type_id
    material_type {
      id
      name
    }
  }
`;
