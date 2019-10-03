export const aligning = align => {
  switch (align) {
    case 'baseline':
    case 'stretch':
    case 'center':
      return align;
    case 'end':
    case 'start':
      return `flex-${align}`;
    default: {
      console.error(`Invalid align value('${align}') provided.`);
      return null;
    }
  }
};

export const justification = justify => {
  switch (justify) {
    case 'between':
    case 'around':
      return `space-${justify}`;
    case 'center':
      return justify;
    case 'end':
    case 'start':
      return `flex-${justify}`;
    default: {
      console.error(`Invalid justify value('${justify}') provided.`);
      return null;
    }
  }
};
