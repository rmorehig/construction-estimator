import { useReducer, useEffect } from 'react'

const initialValues = {
  limit: 10,
  offset: 0,
  count: 0,
  queryFilters: {},
}

const reducer = (state, { type, payload }) => {
  switch (type) {
    case 'SET_LIMIT':
      return { ...state, limit: payload }
    case 'SET_OFFSET':
      return { ...state, offset: payload }
    case 'SET_COUNT':
      return { ...state, count: payload }
    case 'PREVIOUS_PAGE':
      return { ...state, offset: state.offset - state.limit }
    case 'NEXT_PAGE':
      return { ...state, offset: state.limit + state.offset }
    case 'RESET_PAGINATION':
      return { ...state, limit: 10, offset: 0 }
    case 'UPDATE_FILTERS':
      return {
        ...state,
        filters: {
          ...payload,
        },
      }
    case 'UPDATE_QUERY_FILTERS':
      return {
        ...state,
        queryFilters: payload,
      }
    default:
      return state
  }
}

export const usePagination = (initialFilters = {}) => {
  const [
    { limit, offset, count, filters, queryFilters },
    dispatch,
  ] = useReducer(reducer, {
    ...initialValues,
    filters: { ...initialFilters },
  })

  const parseFilters = (filters = {}) => {
    let queryFilters = {}
    let properties = Object.getOwnPropertyNames(filters)
    properties.forEach(property => {
      queryFilters = {
        ...queryFilters,
        [property]: '%' + filters[property] + '%',
      }
    })
    dispatch({ type: 'UPDATE_QUERY_FILTERS', payload: queryFilters })
  }

  useEffect(() => {
    const timeout = setTimeout(() => parseFilters(filters), 500)
    return () => timeout && clearTimeout(timeout)
  }, [filters])

  const setLimit = payload => dispatch({ type: 'SET_LIMIT', payload })
  const setOffset = payload => dispatch({ type: 'SET_OFFSET', payload })
  const previousPage = payload => dispatch({ type: 'PREVIOUS_PAGE', payload })
  const nextPage = payload => dispatch({ type: 'NEXT_PAGE', payload })
  const setCount = payload => dispatch({ type: 'SET_COUNT', payload })
  const resetPagination = () => dispatch({ type: 'RESET_PAGINATION' })
  const updateFilters = payload => dispatch({ type: 'UPDATE_FILTERS', payload })

  return {
    limit,
    offset,
    count,
    filters,
    queryFilters,
    setLimit,
    setOffset,
    previousPage,
    nextPage,
    setCount,
    resetPagination,
    updateFilters,
  }
}

export default usePagination
