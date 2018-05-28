import * as React from 'react';
import { rootRef } from '../firebaseconfig/';

const handleOnClick = (e) => {
  e.preventDefault();
  rootRef.push({
    username: 'name',
    email: 'email',
    profile_picture : 'imageUrl'
  });
};

interface InputProps {
  name: string;
  title: string;
}

const TextField: React.StatelessComponent<InputProps> = ({name, title}) => (
  <div>
    <label htmlFor={name}>{title}</label>
    <input name={name} type="text" value=""/>
  </div>
);

export const Form = () => (
  <form onSubmit={(e) => handleOnClick(e)}>
    <TextField name="bus-name" title="Bus Name"/>
    <TextField name="stop-number" title="Stop #"/>
    <TextField name="frequency" title="Frequency"/>
    <TextField name="next-arrival" title="Next Arrival"/>
    <input type="submit" value="submit" />
  </form>
);