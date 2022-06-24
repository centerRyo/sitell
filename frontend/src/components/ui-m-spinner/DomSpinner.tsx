import { SizeProps } from '@/theme/styleProps';
import classNames from 'classnames';
import React, { VFC } from 'react';
import DomVisuallyHidden from '../ui-a-visuallyHidden/DomVisuallyHidden';
import styles from './dup-spinner-default.module.scss';

type Props = {
  label?: string;
  thickness?: string;
  emptyColor?: string;
  color?: string;
} & SizeProps;

const cx = classNames.bind(styles);

export const DomSpinner: VFC<Props> = (props) => {
  const {
    label = 'Loading...',
    thickness = '2px',
    emptyColor = 'transparent',
    color = '#29663e',
    size: _size,
  } = props;

  const size = _size as NonNullable<SizeProps['size']>;

  const classNames = cx(styles.container, styles[`${size}`]);

  const spinnerStyles = {
    borderColor: emptyColor,
    borderStyle: 'solid',
    borderWidth: thickness,
    borderLeftColor: color,
  };

  return (
    <div className={classNames} style={spinnerStyles}>
      {label && <DomVisuallyHidden>{label}</DomVisuallyHidden>}
    </div>
  );
};
