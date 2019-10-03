import React, { createContext } from 'react';
import { node, number } from 'prop-types';

export const RowContext = createContext();

const RowProvider = props => {
  const { children, maxCol, gutter } = props;

  return <RowContext.Provider value={{ maxCol, gutter }}>{children}</RowContext.Provider>;
};

RowProvider.propTypes = {
  children: node.isRequired,
  gutter: number.isRequired,
  maxCol: number.isRequired,
};

export default RowProvider;
