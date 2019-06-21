import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Button from "./Button";

export default function AddStatisticsComponent({ handleClick }) {
  return (
    <Button style={{ minHeight: 142 }} className="text-gray-600 shadow-md hover:bg-blue-200 hover:text-blue-600 w-full h-full" onClick={(e) => handleClick(e)}>
      <span className="pr-1 text-center align-middle">
        <FontAwesomeIcon className="fill-current h-4 w-4" icon="plus" />
      </span>
      Add
    </Button>
  );
}
