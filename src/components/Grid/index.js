import React from 'react';

const GridContainer = ({ children, columns = 6, spacing = 6 }) => {
  return (
    <div className={`grid grid-cols-${columns} gap-${spacing}`}>{children}</div>
  );
};

const GridItem = ({ children, xs = 6 }) => {
  return <div className={`col-span-${xs}`}>{children}</div>;
};

export { GridContainer, GridItem };
