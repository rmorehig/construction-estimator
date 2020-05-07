import React from 'react';
import classnames from 'classnames';

const Badge = ({
  children,
  gray = false,
  red = false,
  orange = false,
  yellow = false,
  green = false,
  teal = false,
  blue = false,
  indigo = false,
  purple = false,
  pink = false,
  className = null,
  variant
}) => {
  const base =
    'inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium leading-5';
  const classes = classnames(
    base,
    {
      'bg-gray-100 text-gray-800': gray || variant === 'variant',
      'bg-red-100 text-red-800': red || variant === 'variant',
      'bg-orange-100 text-orange-800': orange || variant === 'orange',
      'bg-gray-100 text-yellow-800': yellow || variant === 'yellow',
      'bg-green-100 text-green-800': green || variant === 'green',
      'bg-teal-100 text-teal-800': teal || variant === 'teal',
      'bg-blue-100 text-blue-800': blue || variant === 'blue',
      'bg-indigo-100 text-indigo-800': indigo || variant === 'indigo',
      'bg-purple-100 text-purple-800': purple || variant === 'purple',
      'bg-pink-100 text-pink-800': pink || variant === 'pink'
    },
    className
  );

  return <span className={classes}>{children}</span>;
};

export default Badge;
