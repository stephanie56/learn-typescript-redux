import * as React from 'react';

interface Props {
  children: string;
}

export const Header: React.StatelessComponent<Props> = ({ children }) => (
  <header>
    {children}
  </header>
);
