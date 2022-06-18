/**
 * コンポーネントのスタイル関連のPropsの型定義
 */

export type StructureProps = {
  width?: string;
  height?: string;
};

export const sizeType = {
  xs: 'xs',
  sm: 'sm',
  md: 'md',
  lg: 'lg',
  xl: 'xl',
  xxl: 'xxl',
};

export type SizeProps = {
  size?: typeof sizeType[keyof typeof sizeType];
};

export const colorType = {
  main: 'main',
  sub: 'sub',
};

export type ColorProps = {
  color?: typeof colorType[keyof typeof colorType];
};

export type StateProps = {
  isLoading?: boolean;
  isDisabled?: boolean;
};

export type IconProps = {
  leftIcon?: JSX.Element;
  rightIcon?: JSX.Element;
};
