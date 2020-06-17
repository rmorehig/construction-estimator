import React from 'react';
import View from 'components/View';
import { useGetEntities } from 'graphql/queries/entities/getEntities';
import Tabs from 'components/Tabs';
import Actions from './Actions';
import { useTabs } from 'hooks/useTabs';
import { types } from 'utils/entities';
import Table from 'components/Table';
import { useHistory } from 'react-router-dom';
import Badge from 'components/Badge';

const tabs = [
  {
    id: 'all',
    name: 'All'
  },
  {
    id: 'providers',
    name: 'Providers'
  },
  {
    id: 'customers',
    name: 'Customers'
  }
];

const columns = [
  {
    id: 'name',
    name: 'Name'
  },
  {
    id: 'email',
    name: 'Email'
  },
  {
    id: 'phone',
    name: 'Phone'
  },
  {
    id: 'city',
    name: 'City'
  },
  {
    id: 'tags',
    name: 'Tags',
    component: ({ provider, customer }) =>
      provider || customer ? (
        <Badge blue={provider} teal={customer}>
          {provider ? 'Provider' : 'Customer'}
        </Badge>
      ) : (
        <div />
      )
  }
];

const Entities = () => {
  const { currentTab, toggleTab } = useTabs('all');
  const history = useHistory();
  const {
    data,
    count,
    loading,
    search,
    handleSearch,
    ...pagination
  } = useGetEntities(types[currentTab]);

  const handleClickRow = (row) => {
    history.push(
      `/entities/${row.provider ? 'providers' : 'customers'}/${row.id}`
    );
  };

  return (
    <View
      title="Entities"
      actions={<Actions search={search} onSearch={handleSearch} />}
    >
      <Tabs value={currentTab} tabs={tabs} onChange={toggleTab} />
      <Table
        data={data}
        columns={columns}
        count={count}
        loading={loading}
        onClickRow={handleClickRow}
        {...pagination}
      />
    </View>
  );
};

export default Entities;
