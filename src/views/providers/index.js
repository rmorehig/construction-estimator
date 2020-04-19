import React from 'react'
import { useGetProviders } from 'graphql/queries/providers/getProviders'
import ProvidersList from './list'
import View from 'components/view'

const Providers = () => {
  const {
    providers,
    count,
    nextPage,
    previousPage,
    filters,
    updateFilters,
  } = useGetProviders()
  return (
    <View title="Proveedores">
      <input
        value={filters.name}
        onChange={event => updateFilters({ name: event.target.value })}
      />
      <ProvidersList
        providers={providers}
        count={count}
        nextPage={nextPage}
        previousPage={previousPage}
      />
    </View>
  )
}

export default Providers
