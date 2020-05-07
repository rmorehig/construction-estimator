import React from 'react';
import classnames from 'classnames';
import Spinner from 'components/Spinner';

const List = ({ loading, children }) => {
  if (loading)
    return (
      <div className="flex flex-1 justify-center text-5xl overflow-hidden">
        <Spinner className="text-blue-600 mt-16" />
      </div>
    );
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
