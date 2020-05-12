import React from 'react';
import IconButton from 'components/IconButton';
import useDropdown from 'hooks/useDropdown';

const Menu = ({ children }) => {
  const [containerRef, isOpen, openDropdown] = useDropdown();
  return (
    <div className="relative" ref={containerRef}>
      <IconButton icon="more" variant="none" onClick={openDropdown} />
      <div className="origin-top-right absolute right-0 top-5 w-36 z-50">
        {isOpen && (
          <div className=" py-1 bg-white border border-gray-200 rounded-md shadow-sm">
            <ul>{children}</ul>
          </div>
        )}
      </div>
    </div>
  );
};

const MenuItem = ({ children, component: Component = 'button', ...props }) => (
  <li>
    <Component
      className="text-left block w-full px-4 py-2 text-sm leading-5 text-gray-700 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 transition duration-150 ease-in-out"
      {...props}
    >
      {children}
    </Component>
  </li>
);

export { Menu, MenuItem };
