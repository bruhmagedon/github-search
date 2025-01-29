import type { Mods } from '@common/utilities';
import type { ButtonHTMLAttributes } from 'react';

import { classNames } from '@common/utilities';

import cls from './Button.module.scss';

export enum ButtonTheme {
  CLEAR = 'clear',
  RED = 'red',
  GHOST = 'ghost',
  HEADER = 'header'
}

export enum ButtonSize {
  M = 'size_m',
  L = 'size_l'
}

interface ButtonProps extends React.ComponentProps<'button'> {
  className?: string;
  disabled?: boolean;
  size?: ButtonSize;
  square?: boolean;
  theme?: ButtonTheme;
}

export const Button = (props: ButtonProps) => {
  const {
    className,
    children,
    theme = ButtonTheme.CLEAR,
    size = ButtonSize.M,
    type = 'button',
    square,
    disabled,
    ...otherProps
  } = props;

  const mods: Mods = {
    [cls[theme]]: true,
    [cls.square]: square,
    [cls[size]]: true,
    [cls.disabled]: disabled
  };

  return (
    <button
      className={classNames(cls.Button, mods, [className])}
      disabled={disabled}
      type={type}
      {...otherProps}
    >
      {children}
    </button>
  );
};
