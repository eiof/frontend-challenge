import React, { useState, useEffect } from 'react';
import FormSelect from './FormSelect';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Button from "./Button";
import useLocationData from "../hooks/useLocationData";

export default function StatisticsComponent({ id, removeItem, locations }) {
  const defaultLocation = locations[0].id;
  const [location, setLocation] = useState(defaultLocation);
  const [checkins, setCheckins] = useState([]);

  const onLocationChange = (id) => {
    useLocationData(id).then((checkins) => {
        setCheckins(checkins);
      });
    setLocation(id);
  };

  useEffect(() => {
    if (locations.length) {
      onLocationChange(defaultLocation);
      setLocation(defaultLocation);
    }
  }, [locations]);

  return (
    <div className="bg-white rounded shadow-md">
      <div className="p-4">
        <div className="relative">
          <Button className="absolute top-0 right-0 inline-flex" onClick={(e) => removeItem(id)}>
            <FontAwesomeIcon className="fill-current" icon="times" />
          </Button>
          <FormSelect value={location.id} onChange={(e) => onLocationChange(e.target.value)}>
            {locations.map((option) => (
              <option key={option.id} value={option.id}>{option.name}</option>
            ))}
          </FormSelect>
          <div className="pt-4">
          <p>Busiest Days: <strong>{checkins.join(', ')}</strong></p>
          <p>Most Popular Agreements:</p>
          <p>Most Popular Agreements on Busiest Days:</p>
          </div>
        </div>
      </div>
    </div>
  );
}
