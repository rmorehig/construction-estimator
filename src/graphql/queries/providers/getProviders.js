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
    providersCount: provider_aggregate(
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
    materialsCount: provider_aggregate(
      where: {
        entity: {
          name: { _ilike: $name }
          code: { _ilike: $code }
          email: { _ilike: $email }
          phone: { _ilike: $phone }
          city: { _ilike: $city }
          country: { _ilike: $country }
        }
        provider_materials: {}
      }
    ) {
      aggregate {
        count
      }
    }
    servicesCount: provider_aggregate(
      where: {
        entity: {
          name: { _ilike: $name }
          code: { _ilike: $code }
          email: { _ilike: $email }
          phone: { _ilike: $phone }
          city: { _ilike: $city }
          country: { _ilike: $country }
        }
        provider_services: {}
      }
    ) {
      aggregate {
        count
      }
    }
    workersCount: provider_aggregate(
      where: {
        entity: {
          name: { _ilike: $name }
          code: { _ilike: $code }
          email: { _ilike: $email }
          phone: { _ilike: $phone }
          city: { _ilike: $city }
          country: { _ilike: $country }
        }
        provider_workers: {}
      }
    ) {
      aggregate {
        count
      }
    }
  }
  ${ENTITY_FRAGMENT}
`;

export const GET_MATERIALS = gql`
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
        provider_materials: {}
      }
    ) {
      id
      entity {
        ...entityFields
      }
    }
    providersCount: provider_aggregate(
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
    materialsCount: provider_aggregate(
      where: {
        entity: {
          name: { _ilike: $name }
          code: { _ilike: $code }
          email: { _ilike: $email }
          phone: { _ilike: $phone }
          city: { _ilike: $city }
          country: { _ilike: $country }
        }
        provider_materials: {}
      }
    ) {
      aggregate {
        count
      }
    }
    servicesCount: provider_aggregate(
      where: {
        entity: {
          name: { _ilike: $name }
          code: { _ilike: $code }
          email: { _ilike: $email }
          phone: { _ilike: $phone }
          city: { _ilike: $city }
          country: { _ilike: $country }
        }
        provider_services: {}
      }
    ) {
      aggregate {
        count
      }
    }
    workersCount: provider_aggregate(
      where: {
        entity: {
          name: { _ilike: $name }
          code: { _ilike: $code }
          email: { _ilike: $email }
          phone: { _ilike: $phone }
          city: { _ilike: $city }
          country: { _ilike: $country }
        }
        provider_workers: {}
      }
    ) {
      aggregate {
        count
      }
    }
  }
  ${ENTITY_FRAGMENT}
`;

export const GET_SERVICES = gql`
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
        provider_services: {}
      }
    ) {
      id
      entity {
        ...entityFields
      }
    }
    providersCount: provider_aggregate(
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
    materialsCount: provider_aggregate(
      where: {
        entity: {
          name: { _ilike: $name }
          code: { _ilike: $code }
          email: { _ilike: $email }
          phone: { _ilike: $phone }
          city: { _ilike: $city }
          country: { _ilike: $country }
        }
        provider_materials: {}
      }
    ) {
      aggregate {
        count
      }
    }
    servicesCount: provider_aggregate(
      where: {
        entity: {
          name: { _ilike: $name }
          code: { _ilike: $code }
          email: { _ilike: $email }
          phone: { _ilike: $phone }
          city: { _ilike: $city }
          country: { _ilike: $country }
        }
        provider_services: {}
      }
    ) {
      aggregate {
        count
      }
    }
    workersCount: provider_aggregate(
      where: {
        entity: {
          name: { _ilike: $name }
          code: { _ilike: $code }
          email: { _ilike: $email }
          phone: { _ilike: $phone }
          city: { _ilike: $city }
          country: { _ilike: $country }
        }
        provider_workers: {}
      }
    ) {
      aggregate {
        count
      }
    }
  }
  ${ENTITY_FRAGMENT}
`;
export const GET_WORKERS = gql`
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
        provider_workers: {}
      }
    ) {
      id
      entity {
        ...entityFields
      }
    }
    providersCount: provider_aggregate(
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
    materialsCount: provider_aggregate(
      where: {
        entity: {
          name: { _ilike: $name }
          code: { _ilike: $code }
          email: { _ilike: $email }
          phone: { _ilike: $phone }
          city: { _ilike: $city }
          country: { _ilike: $country }
        }
        provider_materials: {}
      }
    ) {
      aggregate {
        count
      }
    }
    servicesCount: provider_aggregate(
      where: {
        entity: {
          name: { _ilike: $name }
          code: { _ilike: $code }
          email: { _ilike: $email }
          phone: { _ilike: $phone }
          city: { _ilike: $city }
          country: { _ilike: $country }
        }
        provider_services: {}
      }
    ) {
      aggregate {
        count
      }
    }
    workersCount: provider_aggregate(
      where: {
        entity: {
          name: { _ilike: $name }
          code: { _ilike: $code }
          email: { _ilike: $email }
          phone: { _ilike: $phone }
          city: { _ilike: $city }
          country: { _ilike: $country }
        }
        provider_workers: {}
      }
    ) {
      aggregate {
        count
      }
    }
  }
  ${ENTITY_FRAGMENT}
`;

const queries = {
  providers: GET_PROVIDERS,
  materials: GET_MATERIALS,
  services: GET_SERVICES,
  workers: GET_WORKERS
};
export const useGetProviders = ({ type = '' }) => {
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
  const [servicesCount, setServicesCount] = useState(0);
  const [materialsCount, setMaterialsCount] = useState(0);
  const [workersCount, setWorkersCount] = useState(0);
  const { loading } = useQuery(queries[type || 'providers'], {
    variables: {
      limit,
      offset,
      ...queryFilters
    },
    onCompleted: (data) => {
      setProviders(data.provider);
      setCount(data.providersCount.aggregate.count);
      setServicesCount(data.servicesCount.aggregate.count);
      setMaterialsCount(data.materialsCount.aggregate.count);
      setWorkersCount(data.workersCount.aggregate.count);
    },
    fetchPolicy: 'cache-and-network'
  });
  return {
    providers,
    count,
    servicesCount,
    materialsCount,
    workersCount,
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
