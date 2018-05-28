import * as React from 'react';

export const BusSchedule = () => (
  <table>
    <thead>
      <tr>
        <th scope="col">Bus Name</th>
        <th scope="col">Stop #</th>
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
