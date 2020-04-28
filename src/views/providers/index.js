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
    loading,
    count,
    nextPage,
    previousPage,
    filters,
    updateFilters,
    hasPrevious,
    hasNext
  } = useGetProviders();

  return (
    <Wrapper>
      <Overview />
      <List />
    </Wrapper>
  );
};

export default Providers;
