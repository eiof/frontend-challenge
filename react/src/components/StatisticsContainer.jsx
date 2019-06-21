import React, { useEffect, useState } from 'react';
import StatisticsComponent from "./StatisticsComponent";
import AddStatisticsComponent from "./AddStatisticsComponent";
import * as locationsRest from '../services/locationsRest';

export default function StatisticsContainer() {
  const [locations, setLocations] = useState([]);
  const [list, setList] = useState([]);

  useEffect(() => {
    locationsRest.getAll().then((response) => {
      setLocations(response.data.data);
    });
  }, []);

  const addItem = () => {

    // Use timestamp for id for key performance
    const nextList = [...list, { key: Date.now() }];
    setList(nextList);
  };

  const removeItem = (key) => {
    const nextList = [...list];
    const index = nextList.findIndex((item) => item.key === key);
    nextList.splice(index, 1);
    setList(nextList);
  };

  return (
    <div className="flex flex-wrap -m-2">
      {list.map((item) => (
        <div key={item.key} className="w-1/3 p-2">
          <StatisticsComponent
            locations={locations}
            removeItem={removeItem} />
        </div>
      ))}
      <div className="w-1/3 p-2">
        <AddStatisticsComponent handleClick={addItem} />
      </div>
    </div>
  );
}
