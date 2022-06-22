import React, { CSSProperties, ReactNode, VFC } from 'react';

type Props = {
  children: ReactNode;
};

export const visuallyHiddenStyle: CSSProperties = {
  border: '0',
  clip: 'rect(0, 0, 0, 0)',
  height: '1px',
  width: '1px',
  margin: '-1px',
  padding: '0px',
  overflow: 'hidden',
  whiteSpace: 'nowrap',
  position: 'absolute',
};

/**
 * Visually hidden component used to hide
 * elements on screen
 * ref: https://github.com/chakra-ui/chakra-ui/blob/main/packages/visually-hidden/README.md
 */
const DomVisuallyHidden: VFC<Props> = ({ children }) => {
  return <span style={visuallyHiddenStyle}>{children}</span>;
};

export default DomVisuallyHidden;
