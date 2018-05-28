import * as React from 'react';

import { Header } from './components/header';
import { BusSchedule } from './components/bus-schedule';
import { Form } from './components/form';

const App = () => {
  return (
    <div>
      <Header>Next TTC Bus</Header>
      <BusSchedule/>
      <Form/>
    </div>
  );
};

export default App;