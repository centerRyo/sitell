import {
  ColorProps,
  colorType,
  IconProps,
  SizeProps,
  sizeType,
  StateProps,
  StructureProps,
} from '@/theme/styleProps';
import classNames from 'classnames';
import React, { forwardRef, useCallback } from 'react';
import styles from './dup-button-default.m.scss';

const buttonType = {
  button: 'button',
  submit: 'submit',
  reset: 'reset',
} as const;

type Props = StructureProps &
  ColorProps &
  SizeProps &
  Pick<StateProps, 'isLoading' | 'isDisabled'> &
  Pick<IconProps, 'leftIcon' | 'rightIcon'> & {
    type?: typeof buttonType[keyof typeof buttonType];
    className?: string;
    children?: React.ReactNode;
    onClick: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  };

const defaultProps = {
  size: sizeType.sm,
  type: buttonType.button,
  color: colorType.main,
  isLoading: false,
};

const cx = classNames.bind(styles);

export const DomButton = forwardRef<HTMLButtonElement, Props>(
  (
    {
      size: _size,
      color,
      leftIcon,
      rightIcon,
      isLoading,
      isDisabled,
      type,
      className,
      children,
      onClick,
      ...rest
    },
    ref
  ) => {
    const size = _size as NonNullable<SizeProps['size']>;
    const classNames = cx(
      ...[
        styles.container,
        styles[`${size}`],
        styles[`${color}`],
        className,
      ].filter(Boolean),
      {
        isLoading,
        isDisabled,
      }
    );

    const handleClick = useCallback(
      (event: React.MouseEvent<HTMLButtonElement, MouseEvent>): void => {
        if (isLoading || isDisabled) {
          event.preventDefault();
          return;
        }

        onClick?.(event);
      },
      [isLoading, isDisabled, onClick]
    );
    return (
      <button
        className={classNames}
        type={type}
        onClick={handleClick}
        ref={ref}
      >
        {leftIcon && (
          <span className={cx(styles.icon, styles.leftIcon)}>{leftIcon}</span>
        )}
        <span className={styles.content}>
          {isLoading ? <span></span> : children}
        </span>
        {rightIcon && (
          <span className={cx(styles.icon, styles.rightIcon)}>{rightIcon}</span>
        )}
      </button>
    );
  }
);

DomButton.defaultProps = defaultProps;
