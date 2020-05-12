import { useReducer, useEffect } from 'react';

const wordToFilters = (word, filters) => {
  return filters.map((filter) => ({
    [filter]: { _ilike: '%' + word + '%' }
  }));
};

const createPattern = (word, filters) => {
  const pattern = { _or: wordToFilters(word, filters), _and: {} };
  return pattern;
};

export const parseWhere = ({ search, filters }) => {
  const where = { _and: {} };
  const searchArray = search?.split(' ');
  let lastNode;
  searchArray.forEach((word) => {
    const newNode = createPattern(word, filters);
    if (!lastNode) {
      lastNode = newNode;
    } else {
      newNode._and = lastNode;
      lastNode = newNode;
    }
  });
  where._and = lastNode;
  return where;
};

const changeOrder = (order = 'asc') => {
  return order === 'asc' ? 'desc' : 'asc';
};
const initialValues = {
  count: 0,
  limit: 10,
  offset: 0,
  page: 1,
  search: '',
  filters: [],
  where: {},
  sort: {},
  orderBy: {}
};

const reducer = (state, { type, payload }) => {
  switch (type) {
    case 'SET_LIMIT':
      return { ...state, limit: payload };
    case 'SET_OFFSET':
      return { ...state, offset: payload };
    case 'SET_COUNT':
      return { ...state, count: payload };
    case 'PREVIOUS_PAGE':
      return {
        ...state,
        offset: state.offset > 0 ? state.offset - state.limit : state.offset,
        page: state.offset > 0 ? state.page - 1 : state.page
      };
    case 'NEXT_PAGE':
      return {
        ...state,
        offset:
          state.offset + state.limit < state.count
            ? state.limit + state.offset
            : state.offset,
        page:
          state.offset + state.limit < state.count ? state.page + 1 : state.page
      };
    case 'RESET_PAGINATION':
      return { ...state, offset: 0, page: 1 };
    case 'SET_SEARCH':
      return {
        ...state,
        search: payload
      };
    case 'UPDATE_WHERE':
      return {
        ...state,
        where: payload
      };
    case 'SET_ORDER_BY':
      return {
        ...state,
        orderBy: {
          [payload]: Object.keys(state.orderBy).includes(payload)
            ? changeOrder(state.orderBy[payload])
            : 'asc'
        }
      };

    default:
      return state;
  }
};

export const useFilters = (initialPattern = {}) => {
  const [
    { count, page, limit, offset, filters, search, where, orderBy },
    dispatch
  ] = useReducer(reducer, {
    ...initialValues,
    limit: initialPattern.limit || initialValues.limit,
    filters: initialPattern.filters,
    where:
      initialPattern.filters?.length > 0
        ? parseWhere(initialPattern)
        : undefined,
    orderBy: initialPattern.orderBy
  });
  useEffect(() => {
    const timeout = setTimeout(
      () =>
        dispatch({
          type: 'UPDATE_WHERE',
          payload: parseWhere({ search, filters })
        }),
      500
    );
    return () => timeout && clearTimeout(timeout);
  }, [search, filters]);

  useEffect(() => {
    resetPagination();
  }, [count]);

  const setLimit = (payload) => dispatch({ type: 'SET_LIMIT', payload });
  const setOffset = (payload) => dispatch({ type: 'SET_OFFSET', payload });
  const setCount = (payload) => dispatch({ type: 'SET_COUNT', payload });
  const previousPage = () => dispatch({ type: 'PREVIOUS_PAGE' });
  const nextPage = () => dispatch({ type: 'NEXT_PAGE' });
  const resetPagination = () => dispatch({ type: 'RESET_PAGINATION' });
  const handleSearch = (payload) => dispatch({ type: 'SET_SEARCH', payload });
  const handleOrderBy = (payload) =>
    dispatch({ type: 'SET_ORDER_BY', payload });

  return {
    count,
    setCount,
    page,
    limit,
    offset,
    setLimit,
    setOffset,
    previousPage,
    nextPage,
    resetPagination,
    where,
    search,
    handleSearch,
    orderBy,
    handleOrderBy
  };
};

export default useFilters;
