import React, { useReducer, useEffect } from 'react';

const wordToFilters = (word, filters) => {
  return filters.map((filter) => ({
    [filter]: { _ilike: '%' + word + '%' }
  }));
};

const createPattern = (word, filters) => {
  const pattern = { _or: wordToFilters(word, filters), _and: {} };
  return pattern;
};

const parseWhere = ({ search, filters }) => {
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
  limit: 5,
  offset: 0,
  page: 1,
  search: '',
  filters: [],
  where: {},
  sort: {},
  orderBy: {}
};

const FilterContext = React.createContext({});

const FilterProvider = ({ children, initialFilters = initialValues }) => {
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
            state.offset + state.limit < state.count
              ? state.page + 1
              : state.page
        };
      case 'SET_SEARCH':
        return {
          ...state,
          search: payload
        };
      case 'SET_WHERE':
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
      case 'RESET_PAGINATION':
        return { ...initialFilters };
      default:
        return state;
    }
  };
  const [
    { count, page, limit, offset, filters, search, where, orderBy },
    dispatch
  ] = useReducer(reducer, {
    ...initialFilters
  });

  useEffect(() => {
    const timeout = setTimeout(
      () =>
        dispatch({
          type: 'SET_WHERE',
          payload: parseWhere({ search, filters })
        }),
      500
    );
    return () => timeout && clearTimeout(timeout);
  }, [search, filters]);

  const setLimit = (payload) => {
    dispatch({ type: 'SET_LIMIT', payload });
  };
  const setOffset = (payload) => {
    dispatch({ type: 'SET_OFFSET', payload });
  };
  const setCount = (payload) => {
    dispatch({ type: 'SET_COUNT', payload });
  };
  const previousPage = () => {
    dispatch({ type: 'PREVIOUS_PAGE' });
  };
  const nextPage = () => {
    dispatch({ type: 'NEXT_PAGE' });
  };
  const resetPagination = () => {
    dispatch({ type: 'RESET_PAGINATION' });
  };
  const handleSearch = (payload) => {
    dispatch({ type: 'SET_SEARCH', payload });
  };
  const handleOrderBy = (payload) => {
    dispatch({ type: 'SET_ORDER_BY', payload });
  };
  const setWhere = (payload) => {
    dispatch({ type: 'SET_WHERE', payload });
  };
  const setFilters = (payload) => {
    dispatch({ type: 'SET_FILTERS', payload });
  };

  const value = React.useMemo(
    () => ({
      count,
      page,
      limit,
      offset,
      filters,
      search,
      where,
      orderBy,
      setLimit,
      setOffset,
      setCount,
      previousPage,
      nextPage,
      resetPagination,
      handleSearch,
      handleOrderBy,
      setWhere,
      setFilters
    }),
    [
      count,
      page,
      limit,
      offset,
      filters,
      search,
      where,
      orderBy,
      setLimit,
      setOffset,
      setCount,
      previousPage,
      nextPage,
      resetPagination,
      handleSearch,
      handleOrderBy,
      setWhere,
      setFilters
    ]
  );

  return (
    <FilterContext.Provider value={value}>{children}</FilterContext.Provider>
  );
};

function useFilters({ limit, filters, search, orderBy }) {
  const context = React.useContext(FilterContext);

  if (context === undefined) {
    throw new Error(`useFilters must be used within a FilterProvider`);
  }
  const { setLimit, setOffset, setFilters, setWhere, handleOrderBy } = context;

  setLimit(limit);
  setOffset(limit);
  setFilters(filters);
  if (search && filters) {
    setWhere(parseWhere({ search, filters }));
  }
  handleOrderBy(orderBy);

  return context;
}

export { FilterProvider, useFilters };
