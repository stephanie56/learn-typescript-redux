import * as React from 'react';

import Button from './Button';

export interface Props {
  name: string;
  enthusiasmLevel?: number;
  onIncrement?: () => void;
  onDecrement?: () => void;
  greeter?: () => void;
}

const getExclaimationMarks = (numChars: number) => {
  return Array(numChars + 1).join('!');
}

const Hello = ({ name, enthusiasmLevel=1, onDecrement, onIncrement, greeter}: Props) => {
  return (
    <div className="hello">
      <div className="greeting">
        Hello {name + getExclaimationMarks(enthusiasmLevel)}
      </div>
      <Button handleOnClick={onIncrement} value="Increase"/>
      <Button handleOnClick={onDecrement} value="Decrease"/>
      <Button handleOnClick={greeter} value="SayHello"/>
    </div>
  );
}

export default Hello;

