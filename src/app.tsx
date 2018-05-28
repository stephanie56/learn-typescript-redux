import * as React from 'react';

const Header = ({ children }) => (
  <header>
    {children}
  </header>
);

const BusSchedule = () => (
  <table>
    <thead>
      <tr>
        <th scope="col">Bus Name</th>
        <th scope="col">Destination</th>
        <th scope="col">Frequency</th>
        <th scope="col">Next Arrival</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <th scope="row">199A</th>
        <td>Finch stn</td>
        <td>10 minutes</td>
        <td>10:12am</td>
      </tr>
      <tr>
        <th scope="row">39</th>
        <td>Finch stn</td>
        <td>5 minutes</td>
        <td>10:31am</td>
      </tr>
      <tr>
        <th scope="row">53</th>
        <td>Finch stn</td>
        <td>12 minutes</td>
        <td>10:05am</td>
      </tr>
    </tbody>
  </table>
);

const Form = () => (
  <form>
    <label htmlFor="train-name">Bus Name</label>
    <input name="train-name" type="text" value=""/>
    <input type="submit" value="submit" />
  </form>
);

const App = () => {
  return (
    <div>
      <Header>Next TTC</Header>
      <BusSchedule/>
      <Form/>
    </div>
  );
};

export default App;