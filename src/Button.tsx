import * as React from 'react';

export interface InputProps {
  value: string;
  handleOnClick?: () => void;
}

const Button = ({ value, handleOnClick }: InputProps) => {
  return (
    <button onClick={handleOnClick} >{ value }</button>
  );
}

export default Button;