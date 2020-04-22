import React from 'react'

const Select = React.forwardRef((props, ref) => {
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
      <select
        ref={ref}
        {...props}
        class="mt-1 block form-select w-full py-2 px-3 py-0 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5"
      >
        {props.children}
      </select>
      {props.error && (
        <p className="mt-2 text-sm text-red-600">{props.error}</p>
      )}
    </div>
  )
})

export default Select
