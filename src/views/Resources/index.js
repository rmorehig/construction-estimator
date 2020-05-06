import React from 'react';
import View from 'components/View';
import { useGetMaterials } from 'graphql/queries/resources/getMaterials';
import Tabs from 'components/Tabs';
import Actions from './Actions';
import { useTabs } from 'hooks/useTabs';
import Table from 'components/Table';

const tabs = [
  {
    id: 'materials',
    name: 'Materiales'
  },
  {
    id: 'services',
    name: 'Servicios'
  },
  {
    id: 'workers',
    name: 'Trabajadores'
  }
];

const Resources = () => {
  const { currentTab, toggleTab } = useTabs('materials');
  const {
    data,
    count,
    loading,
    search,
    handleSearch,
    ...pagination
  } = useGetMaterials();

  const columns = [
    {
      id: 'name',
      name: 'Nombre'
    },
    {
      id: 'model',
      name: 'Modelo'
    },
    {
      id: 'manufacturer',
      name: 'Marca'
    },
    {
      id: 'material_type_id',
      name: 'Tipo'
    }
  ];

  return (
    <View
      title="Recursos"
      actions={<Actions search={search} onSearch={handleSearch} />}
    >
      <Tabs value={currentTab} tabs={tabs} onChange={toggleTab} />
      <Table
        data={data}
        columns={columns}
        count={count}
        loading={loading}
        {...pagination}
      />
    </View>
  );
};

export default Resources;
