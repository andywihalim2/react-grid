import React from 'react';
import { number, oneOf, node, string } from 'prop-types';
import { css, cx } from 'react-emotion';
import RowProvider from './context';
import { justification, aligning } from './methods';

const rowStyle = ({ gutter, outerGutter, justify, align }) => {
  return css({
    display: 'flex',
    flexWrap: 'wrap',
    marginLeft: outerGutter - gutter / 2,
    marginRight: outerGutter - gutter / 2,
    boxSizing: 'border-box',
    ...(justify && { justifyContent: justification(justify) }),
    ...(align && { alignItems: aligning(align) }),
  });
};
const negativeNeutralize = css({
  overflowX: 'hidden',
});

const Row = props => {
  const { children, align, gutter, justify, maxCol, outerGutter, className: propClass, ...restProps } = props;
  const localClass = rowStyle({ gutter, outerGutter, justify, align });

  const renderRow = () => {
    return (
      <div className={cx(localClass, propClass)} {...restProps}>
        {children}
      </div>
    );
  };

  return (
    <RowProvider {...{ maxCol, gutter }}>
      {outerGutter ? renderRow() : <div className={negativeNeutralize}>{renderRow()}</div>}
    </RowProvider>
  );
};

export default Row;

Row.propTypes = {
  align: oneOf(['baseline', 'stretch', 'center', 'end', 'start']),
  children: node,
  className: string,
  gutter: number,
  justify: oneOf(['between', 'around', 'center', 'end', 'start']),
  maxCol: number,
  outerGutter: number,
};

Row.defaultProps = {
  className: '',
  gutter: 8,
  outerGutter: 0,
  maxCol: 12,
  justify: null,
  align: null,
  children: null,
};
