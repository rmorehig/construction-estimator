import React from 'react';
import styled from 'styled-components';
import { useGetProviders } from 'graphql/queries/providers/getProviders';
import Overview from './Overview';
import List from './List';

const Wrapper = styled.div`
  background: ${({ theme }) => theme.colors.background};
  position: relative;
  display: grid;
  grid-template-columns: 400px auto;
  overflow-y: hidden;
`;

const Providers = () => {
  const {
    providers,
    count,
    servicesCount,
    materialsCount,
    workersCount,
    loading,
    nextPage,
    previousPage,
    filters,
    updateFilters,
    hasPrevious,
    hasNext
  } = useGetProviders();

  return (
    <Wrapper>
      <Overview
        count={count}
        servicesCount={servicesCount}
        materialsCount={materialsCount}
        workersCount={workersCount}
      />
      <List />
    </Wrapper>
  );
};

export default Providers;
