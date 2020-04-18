import { useReducer } from 'react'

const initialValues = {
  limit: 10,
  offset: 0,
  count: 0,
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
    default:
      return state
  }
}

export const usePagination = () => {
  const [{ limit, offset, count }, dispatch] = useReducer(reducer, {
    ...initialValues,
  })

  const setLimit = payload => dispatch({ type: 'SET_LIMIT', payload })
  const setOffset = payload => dispatch({ type: 'SET_OFFSET', payload })
  const previousPage = payload => dispatch({ type: 'PREVIOUS_PAGE', payload })
  const nextPage = payload => dispatch({ type: 'NEXT_PAGE', payload })
  const setCount = payload => dispatch({ type: 'SET_COUNT', payload })
  const resetPagination = () => dispatch({ type: 'RESET_PAGINATION' })

  return {
    setLimit,
    setOffset,
    limit,
    offset,
    count,
    previousPage,
    nextPage,
    setCount,
    resetPagination,
  }
}

export default usePagination
