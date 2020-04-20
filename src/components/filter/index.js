import React, { useState, useEffect, useRef } from 'react'

const Filter = ({ title = '', value, onChange = () => {} }) => {
  const node = useRef()
  const [showFilter, setShowFilter] = useState(false)
  const handleEnter = event => {
    if (event.keyCode === 13) {
      event.preventDefault()
      setShowFilter(false)
    }
  }

  const handleClick = e => {
    if (node.current.contains(e.target)) {
      return
    }
    setShowFilter(false)
  }
  useEffect(() => {
    document.addEventListener('mousedown', handleClick)
    return () => {
      document.removeEventListener('mousedown', handleClick)
    }
  }, [])

  return (
    <div
      ref={node}
      className="flex justify-between items-center"
      onClick={() => setShowFilter(true)}
    >
      {!showFilter ? (
        <span className={value ? 'text-indigo-600' : 'text-gray-500'}>
          {title}
        </span>
      ) : (
        <div class="rounded-md shadow-sm">
          <input
            class="form-input block w-full sm:text-sm sm:leading-5"
            placeholder={`Buscar ${title.toLowerCase()}`}
            value={value}
            onChange={onChange}
            onKeyDown={handleEnter}
          />
        </div>
      )}
    </div>
  )
}

export default Filter
