import React from 'react';
import classnames from 'classnames';

const List = ({ children }) => {
  return <ul>{children}</ul>;
};

const ListItem = ({ children, noBorder = false, className }) => {
  const base = '';

  const classes = classnames(
    base,
    { 'border-b border-gray-200': !noBorder },
    className
  );

  return <li className={classes}>{children}</li>;
};
export { List, ListItem };
