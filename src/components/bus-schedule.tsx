import * as React from 'react';
import { connect } from 'react-redux';

interface ScheduleObject {
  busName: string;
  stopName: string;
  frequency: string;
  nextArrival: string;
}

interface Props {
  schedule: Array<ScheduleObject>;
}

const BusSchedule: React.StatelessComponent<Props> = ({schedule}: Props) => (
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
      {
        schedule.map(({busName, stopName, frequency, nextArrival}) => {
          return (
            <tr key={busName}>
              <th scope="row">{busName}</th>
              <td>{stopName}</td>
              <td>{frequency}</td>
              <td>{nextArrival}</td>
            </tr>
          );
        }
      )}
    </tbody>
  </table>
);

const ConnectedSchedule = connect((state) => {
  schedule: state.schedule
}, null)(BusSchedule);

export {
  ConnectedSchedule as BusSchedule
}