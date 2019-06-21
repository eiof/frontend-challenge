import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function FormSelect({ className, children, ...props }) {
  return (
    <div className="inline-block relative">
      <select className={`${className} block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline`} {...props}>
        {children}
      </select>
      <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
        <FontAwesomeIcon className="fill-current" icon="chevron-down" />
      </div>
    </div>
  );
}
