import { useReducer } from 'react';

const actionTypes = {
  TOGGLE_INDEX: 'TOGGLE_INDEX'
};

const accordionReducer = (openIndexes, action) => {
  switch (action.type) {
    case actionTypes.TOGGLE_INDEX: {
      const closing = openIndexes.includes(action.index);
      return closing
        ? openIndexes.filter((index) => index !== action.index)
        : [...openIndexes, action.index];
    }
    default: {
      throw new Error('Unhandled type in accordinReducer: ' + action.type);
    }
  }
};

const useAccordion = ({ reducer = accordionReducer } = {}) => {
  const [openIndexes, dispatch] = useReducer(reducer, [0]);
  const toggleIndex = (index) =>
    dispatch({ type: actionTypes.TOGGLE_INDEX, index });
  return { openIndexes, toggleIndex };
};

export { useAccordion, accordinReducer, actionTypes };
