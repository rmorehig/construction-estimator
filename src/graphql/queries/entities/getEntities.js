import gql from 'graphql-tag';
import { useQuery } from '@apollo/react-hooks';
import { ENTITY_FRAGMENT } from 'graphql/fragments/entity';
import useFilters from 'hooks/useFilters';

export const GET_ENTITIES = gql`
  query getEntities(
    $limit: Int
    $offset: Int
    $name: String
    $code: String
    $email: String
    $phone: String
    $city: String
    $country: String
    $search: String
    $sortName: order_by
    $sortEmail: order_by
    $sortPhone: order_by
    $sortCity: order_by
  ) {
    entities: entity(
      limit: $limit
      offset: $offset
      order_by: {
        name: $sortName
        email: $sortEmail
        phone: $sortPhone
        city: $sortCity
      }
      where: {
        _or: [
          { name: { _ilike: $search } }
          { code: { _ilike: $search } }
          { email: { _ilike: $search } }
          { phone: { _ilike: $search } }
          { city: { _ilike: $search } }
        ]
      }
    ) {
      ...entityFields
    }
    providers: entity(
      limit: $limit
      offset: $offset
      order_by: {
        name: $sortName
        email: $sortEmail
        phone: $sortPhone
        city: $sortCity
      }
      where: {
        _or: [
          { name: { _ilike: $search } }
          { code: { _ilike: $search } }
          { email: { _ilike: $search } }
          { phone: { _ilike: $search } }
          { city: { _ilike: $search } }
        ]
      }
    ) {
      ...entityFields
    }
    materialProviders: entity(
      limit: $limit
      offset: $offset
      order_by: {
        name: $sortName
        email: $sortEmail
        phone: $sortPhone
        city: $sortCity
      }
      where: {
        _or: [
          { name: { _ilike: $search } }
          { code: { _ilike: $search } }
          { email: { _ilike: $search } }
          { phone: { _ilike: $search } }
          { city: { _ilike: $search } }
        ]
        provider: { provider_materials: {} }
      }
    ) {
      ...entityFields
    }
    serviceProviders: entity(
      limit: $limit
      offset: $offset
      order_by: {
        name: $sortName
        email: $sortEmail
        phone: $sortPhone
        city: $sortCity
      }
      where: {
        _or: [
          { name: { _ilike: $search } }
          { code: { _ilike: $search } }
          { email: { _ilike: $search } }
          { phone: { _ilike: $search } }
          { city: { _ilike: $search } }
        ]
        provider: { provider_services: {} }
      }
    ) {
      ...entityFields
    }
    workerProviders: entity(
      limit: $limit
      offset: $offset
      order_by: {
        name: $sortName
        email: $sortEmail
        phone: $sortPhone
        city: $sortCity
      }
      where: {
        _or: [
          { name: { _ilike: $search } }
          { code: { _ilike: $search } }
          { email: { _ilike: $search } }
          { phone: { _ilike: $search } }
          { city: { _ilike: $search } }
        ]
        provider: { provider_workers: {} }
      }
    ) {
      ...entityFields
    }
    customers: entity(
      limit: $limit
      offset: $offset
      order_by: {
        name: $sortName
        email: $sortEmail
        phone: $sortPhone
        city: $sortCity
      }
      where: {
        _or: [
          { name: { _ilike: $search } }
          { code: { _ilike: $search } }
          { email: { _ilike: $search } }
          { phone: { _ilike: $search } }
          { city: { _ilike: $search } }
        ]
        customer: {}
      }
    ) {
      ...entityFields
    }
    entitiesCount: entity_aggregate(
      where: {
        _or: [
          { name: { _ilike: $search } }
          { code: { _ilike: $search } }
          { email: { _ilike: $search } }
          { phone: { _ilike: $search } }
          { city: { _ilike: $search } }
        ]
        country: { _ilike: $country }
      }
    ) {
      aggregate {
        count
      }
    }
    providersCount: entity_aggregate(
      where: {
        _or: [
          { name: { _ilike: $search } }
          { code: { _ilike: $search } }
          { email: { _ilike: $search } }
          { phone: { _ilike: $search } }
          { city: { _ilike: $search } }
        ]
        provider: {}
      }
    ) {
      aggregate {
        count
      }
    }
    materialProvidersCount: entity_aggregate(
      where: {
        _or: [
          { name: { _ilike: $search } }
          { code: { _ilike: $search } }
          { email: { _ilike: $search } }
          { phone: { _ilike: $search } }
          { city: { _ilike: $search } }
        ]
        provider: { provider_materials: {} }
      }
    ) {
      aggregate {
        count
      }
    }
    serviceProvidersCount: entity_aggregate(
      where: {
        _or: [
          { name: { _ilike: $search } }
          { code: { _ilike: $search } }
          { email: { _ilike: $search } }
          { phone: { _ilike: $search } }
          { city: { _ilike: $search } }
        ]
        provider: { provider_services: {} }
      }
    ) {
      aggregate {
        count
      }
    }
    workerProvidersCount: entity_aggregate(
      where: {
        _or: [
          { name: { _ilike: $search } }
          { code: { _ilike: $search } }
          { email: { _ilike: $search } }
          { phone: { _ilike: $search } }
          { city: { _ilike: $search } }
        ]
        provider: { provider_workers: {} }
      }
    ) {
      aggregate {
        count
      }
    }
    customersCount: entity_aggregate(
      where: {
        _or: [
          { name: { _ilike: $search } }
          { code: { _ilike: $search } }
          { email: { _ilike: $search } }
          { phone: { _ilike: $search } }
          { city: { _ilike: $search } }
        ]
        customer: {}
      }
    ) {
      aggregate {
        count
      }
    }
  }
  ${ENTITY_FRAGMENT}
`;

export const useGetEntities = () => {
  const {
    limit,
    offset,
    nextPage,
    previousPage,
    filters,
    queryFilters,
    updateFilters,
    hasNext,
    hasPrevious,
    sort
  } = {};
  const { data, loading } = useQuery(GET_ENTITIES, {
    variables: {
      limit,
      offset,
      ...sort,
      ...queryFilters
    },
    fetchPolicy: 'cache-and-network'
  });

  return {
    data,
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
