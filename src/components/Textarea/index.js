import React from 'react';

const Textarea = React.forwardRef((props, ref) => {
  return (
    <div>
      {props.label && (
        <label
          htmlFor={props.id}
          className="block text-sm font-medium leading-5 text-gray-600"
        >
          {props.label}
        </label>
      )}
      <div className="rounded-md shadow-sm">
        <textarea
          ref={ref}
          {...props}
          className="form-textarea mt-1 block w-full transition duration-150 ease-in-out sm:text-sm sm:leading-5"
        />
      </div>
      {props.error && (
        <p className="mt-2 text-sm text-red-600">{props.error}</p>
      )}
    </div>
  );
});

export default Textarea;
