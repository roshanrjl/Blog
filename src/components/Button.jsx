import React from 'react'

function Button({
    Childern,
    className = '',
    type = 'button',
    ...props
}) {
  return (
    <button
      type={type}
      className={`inline-block px-6 py-2 duration-200 hover:bg-blue-700 rounded-full ${className}`}
      {...props}
    >
      {Childern}
    </button>
  )
}

export default Button