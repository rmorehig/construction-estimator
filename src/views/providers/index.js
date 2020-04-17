import React from 'react'
import Table from 'components/table'
import { useGetProviders } from 'graphql/queries/providers/getProviders'

const Providers = () => {
  const { providers } = useGetProviders()
  return <Table data={providers} />
}

export default Providers
