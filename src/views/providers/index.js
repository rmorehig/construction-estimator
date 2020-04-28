import React, { useState } from 'react';
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
  const [type, setType] = useState('providers');
  const {
    count,
    servicesCount,
    materialsCount,
    workersCount,
    updateFilters,
    ...rest
  } = useGetProviders({ type });

  return (
    <Wrapper>
      <Overview
        count={count}
        servicesCount={servicesCount}
        materialsCount={materialsCount}
        workersCount={workersCount}
        setType={setType}
      />
      <List {...rest} />
    </Wrapper>
  );
};

export default Providers;
