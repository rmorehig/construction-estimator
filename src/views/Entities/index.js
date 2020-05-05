import React from 'react';
import List from './List';
import View from 'components/View';
import { useGetEntities } from 'graphql/queries/entities/getEntities';
import Tabs from 'components/Tabs';
import Actions from './Actions';
import { useTabs } from 'hooks/useTabs';
import { types } from 'utils/entities';

const tabs = [
  {
    id: 'all',
    name: 'Todo'
  },
  {
    id: 'materialProviders',
    name: 'Materiales'
  },
  {
    id: 'serviceProviders',
    name: 'Servicios'
  },
  {
    id: 'workerProviders',
    name: 'Trabajadores'
  },
  {
    id: 'customers',
    name: 'Clientes'
  }
];

const Entities = () => {
  const { currentTab, toggleTab } = useTabs('all');
  const {
    data,
    count,
    loading,
    search,
    handleSearch,
    ...pagination
  } = useGetEntities(types[currentTab]);
  const columns = [
    {
      id: 'name',
      name: 'Nombre'
    },
    {
      id: 'email',
      name: 'Email'
    },
    {
      id: 'phone',
      name: 'Teléfono'
    },
    {
      id: 'city',
      name: 'Población'
    }
  ];

  return (
    <View
      title="Entidades"
      actions={<Actions search={search} onSearch={handleSearch} />}
    >
      <Tabs value={currentTab} tabs={tabs} onChange={toggleTab} />
      <List
        data={data}
        columns={columns}
        count={count}
        loading={loading}
        {...pagination}
      />
    </View>
  );
};

export default Entities;
