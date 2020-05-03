import React, { useState } from 'react';
import List from './List';
import View from 'components/View';
import { useGetEntities } from 'graphql/queries/entities/getEntities';
import Tabs from 'components/Tabs';
import Actions from './Actions';
import { useTabs } from 'hooks/useTabs';
import Filters from './Filters';

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
let index = 0;
const Entities = () => {
  console.log('holas', index++);
  const { currentTab, toggleTab } = useTabs('all');
  const {
    data,
    loading,
    filters,
    updateFilters,
    nextPage,
    previousPage,
    hasPrevious,
    hasNext
  } = useGetEntities();
  return (
    <View title="Entidades" actions={<Actions />}>
      <Tabs value={currentTab} tabs={tabs} onChange={toggleTab} />
      <Filters filters={filters} updateFilters={updateFilters} />
      {currentTab === 'all' && (
        <List
          data={data?.entities}
          count={data?.entitiesCount?.aggregate.count}
          loading={loading}
          nextPage={nextPage}
          previousPage={previousPage}
          hasPrevious={hasPrevious}
          hasNext={hasNext}
        />
      )}
    </View>
  );
};

export default Entities;
