// Based on Ant.design & Bootstrap 4.x
export const Ant_BS4 = {
  xs: (col = 0) => ({
    span: col,
  }),
  sm: (col = 0) => ({
    scrFrom: 576,
    span: col,
  }),
  md: (col = 0) => ({
    scrFrom: 768,
    span: col,
  }),
  lg: (col = 0) => ({
    scrFrom: 992,
    span: col,
  }),
  xl: (col = 0) => ({
    scrFrom: 1200,
    span: col,
  }),
  xxl: (col = 0) => ({
    scrFrom: 1600,
    span: col,
  }),
};

// Based on Bootstrap 3.x
export const BS3 = {
  xs: (col = 0) => ({
    span: col,
  }),
  sm: (col = 0) => ({
    scrFrom: 768,
    span: col,
  }),
  md: (col = 0) => ({
    scrFrom: 992,
    span: col,
  }),
  lg: (col = 0) => ({
    scrFrom: 1200,
    span: col,
  }),
};

// Based on Material Design Lite (MDL)
export const MDL = {
  xs: (col = 0) => ({
    span: col,
  }),
  sm: (col = 0) => ({
    scrFrom: 481,
    span: col,
  }),
  md: (col = 0) => ({
    scrFrom: 840,
    span: col,
  }),
  lg: (col = 0) => ({
    scrFrom: 1025,
    span: col,
  }),
};
