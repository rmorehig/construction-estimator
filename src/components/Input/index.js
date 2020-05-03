import React from 'react';

const Input = React.forwardRef((props, ref) => {
  return (
    <div>
      {props.label && (
        <label
          for={props.id}
          className="block text-sm font-medium leading-5 text-gray-700"
        >
          {props.label}
        </label>
      )}
      <div class="mt-1 flex rounded-md shadow-sm">
        {props.id === 'website' && (
          <span className="inline-flex items-center px-3 rounded-l-md border border-r-0 border-gray-300 bg-gray-50 text-gray-500 text-sm">
            http://
          </span>
        )}
        <input
          {...props}
          ref={ref}
          className={`form-input flex-1 block w-full rounded-none transition duration-150 ease-in-out sm:text-sm sm:leading-5 ${
            props.id === 'website' ? 'rounded-r-md' : 'rounded-md'
          }`}
        />
      </div>
      {props.error && (
        <p className="mt-2 text-sm text-red-600">{props.error}</p>
      )}
    </div>
  );
});

export default Input;
