import React, { useState, useEffect, useRef } from 'react';

const CheveronDownIcon = () => (
  <svg
    className="cursor-pointer"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M19 9L12 16L5 9"
      stroke="#4A5568"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const Filter = ({ title = '', value, onChange = () => {} }) => {
  const node = useRef();
  const [showFilter, setShowFilter] = useState(false);
  const handleEnter = (event) => {
    if (event.keyCode === 13) {
      event.preventDefault();
      setShowFilter(false);
    }
  };

  const handleClick = (e) => {
    if (node.current.contains(e.target)) {
      return;
    }
    setShowFilter(false);
  };
  useEffect(() => {
    document.addEventListener('mousedown', handleClick);
    return () => {
      document.removeEventListener('mousedown', handleClick);
    };
  }, []);

  return (
    <div
      ref={node}
      className="relative flex justify-between items-center h-auto"
      onClick={() => setShowFilter(true)}
    >
      <span className={value ? 'text-indigo-600' : 'text-gray-500'}>
        {title}
      </span>
      {showFilter && (
        <div class="origin-top-right absolute right-0 top-5 mt-2 w-56 rounded-md shadow-lg">
          <div class="rounded-md bg-white shadow-xs">
            <div class="py-6 px-3">
              <input
                class="form-input block w-full sm:text-sm sm:leading-5"
                placeholder={`Buscar ${title.toLowerCase()}`}
                value={value}
                onChange={onChange}
                onKeyDown={handleEnter}
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Filter;
