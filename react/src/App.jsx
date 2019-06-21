import React from 'react';
import DashboardContainer from './components/DashboardContainer';
import StatisticsContainer from './components/StatisticsContainer';

import { library } from '@fortawesome/fontawesome-svg-core';
import { faPlus, faChevronDown, faTimes } from '@fortawesome/free-solid-svg-icons';

library.add(faPlus, faChevronDown, faTimes);

const App = () => (
  <DashboardContainer>
    <StatisticsContainer />
  </DashboardContainer>
);

export default App;
