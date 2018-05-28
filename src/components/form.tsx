import * as React from 'react';
import { rootRef } from '../firebaseconfig/';

const handleOnClick = () => {
  rootRef.set({
    username: 'name',
    email: 'email',
    profile_picture : 'imageUrl'
  });
};

export const Form = () => (
  <form>
    <label htmlFor="train-name">Bus Name</label>
    <input name="train-name" type="text" value=""/>
    <input type="submit" onClick={handleOnClick} value="submit" />
  </form>
);