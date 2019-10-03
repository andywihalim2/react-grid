import React, { useContext } from 'react';
import { css, cx } from 'react-emotion';
import { node, number, oneOf, oneOfType, string, arrayOf, object } from 'prop-types';
import { RowContext } from './context';
import { aligning } from './methods';

const exceedsErr = (span, maxCol, scrFrom) => {
  console.error(`Col span(${span}) is larger than allowed maxCol(${maxCol}) | scrFrom: ${scrFrom}`);
  return maxCol;
};

const colSpan = (span, maxCol, scrFrom = 0) => {
  switch (span) {
    case 'auto':
      return {
        flex: '0 0 auto',
        width: 'auto',
        maxWidth: '100%',
        display: 'block',
      };
    case 0:
      return {
        flexGrow: 1,
        flexBasis: 0,
        maxWidth: '100%',
        display: 'block',
      };
    case -1:
      return {
        display: 'none',
      };
    default: {
      const renderSpan = span > maxCol ? exceedsErr(span, maxCol, scrFrom) : span;

      return {
        flex: `0 0 ${(renderSpan / maxCol) * 100}%`,
        maxWidth: `${(renderSpan / maxCol) * 100}%`,
        display: 'block',
      };
    }
  }
};

const responsiveCol = (span, maxCol) => {
  return Object.assign(
    {},
    ...span.map(eachSpan => {
      if (typeof eachSpan === 'number' || typeof eachSpan === 'string') {
        return colSpan(eachSpan, maxCol);
      }

      const { span: innerSpan = 0, scrFrom = 0 } = eachSpan;

      return scrFrom
        ? {
            [`@media screen and (min-width: ${scrFrom}px)`]: colSpan(innerSpan, maxCol, scrFrom),
          }
        : colSpan(innerSpan, maxCol, scrFrom);
    }),
  );
};

const colStyle = ({ gutter, maxCol, span, alignSelf }) => {
  const globalStyle = {
    paddingLeft: gutter / 2,
    paddingRight: gutter / 2,
    boxSizing: 'border-box',
    ...(alignSelf && { alignSelf: aligning(alignSelf) }),
  };

  return css({
    ...globalStyle,
    ...(typeof span === 'object' ? responsiveCol(span, maxCol) : colSpan(span, maxCol)),
  });
};

const Col = ({ children, span, alignSelf, className: propClass, ...restProps }) => {
  const { gutter, maxCol } = useContext(RowContext);
  const localClass = colStyle({ gutter, maxCol, span, alignSelf });

  return (
    <div className={cx(localClass, propClass)} {...restProps}>
      {children}
    </div>
  );
};

Col.propTypes = {
  alignSelf: oneOf(['baseline', 'stretch', 'center', 'end', 'start']),
  children: node,
  className: string,
  span: oneOfType([string, number, arrayOf(object)]),
};

Col.defaultProps = {
  alignSelf: null,
  children: null,
  className: '',
  span: 0,
};

export default Col;
