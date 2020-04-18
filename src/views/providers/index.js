import React from 'react'
import { useGetProviders } from 'graphql/queries/providers/getProviders'
import ProvidersList from './list'
import View from 'components/view'

const Providers = () => {
  const { providers, count } = useGetProviders()
  return (
    <View title="Proveedores">
      <ProvidersList providers={providers} count={count} />
    </View>
  )
}

export default Providers
