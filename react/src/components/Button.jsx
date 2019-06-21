import React from 'react';

export default function Button({ className, children, ...rest }) {
  return (
    <button className={`${className} border hover:bg-gray-300 py-2 px-3 rounded items-center focus:outline-none focus:shadow-outline`} {...rest}>
      {children}
    </button>
  );
}
