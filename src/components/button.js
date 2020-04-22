import React, { forwardRef } from 'react'

const Button = forwardRef((props, ref) => {
  return (
    <div class="px-1">
      <span class="inline-flex rounded-md shadow-sm">
        <button
          {...props}
          ref={ref}
          type="button"
          class="inline-flex items-center px-4 py-2 border border-transparent text-sm leading-5 font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:shadow-outline-indigo focus:border-indigo-700 active:bg-indigo-700"
        >
          {props.children}
        </button>
      </span>
    </div>
  )
})

export default Button
