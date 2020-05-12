import React from 'react';

const Checkbox = React.forwardRef((props, ref) => {
  const { id, label } = props;
  return (
    <div class="relative flex items-start">
      <div class="absolute flex items-center h-5">
        <input
          id={id}
          type="checkbox"
          ref={ref}
          class="form-checkbox h-4 w-4 text-blue-500 transition duration-150 ease-in-out"
          {...props}
        />
      </div>
      <div class="pl-7 text-sm leading-5">
        <label htmlFor={props.id} class="font-medium text-gray-700">
          {label}
        </label>
      </div>
      {props.error && (
        <p className="mt-2 text-sm text-red-600">{props.error}</p>
      )}
    </div>
  );
});

export default Checkbox;
