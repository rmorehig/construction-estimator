import { useReducer } from 'react';

const actionTypes = {
  TOGGLE_TAB: 'TOGGLE_TAB'
};

const tabsReducer = (currentTab, action) => {
  switch (action.type) {
    case actionTypes.TOGGLE_TAB: {
      return action.index;
    }
    default: {
      throw new Error('Unhandled type in tabsReducer: ' + action.type);
    }
  }
};

const useTabs = (initialTab = '') => {
  const [currentTab, dispatch] = useReducer(tabsReducer, initialTab);
  const toggleTab = (index) =>
    dispatch({ type: actionTypes.TOGGLE_TAB, index });
  return { currentTab, toggleTab };
};

export { useTabs };
