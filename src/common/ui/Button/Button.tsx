import type { Mods } from '@common/utilities';
import type { ButtonHTMLAttributes } from 'react';

import { classNames } from '@common/utilities';

import cls from './Button.module.scss';

export enum ButtonTheme {
  CLEAR = 'clear',
  RED = 'red'
}

export enum ButtonSize {
  M = 'size_m',
  L = 'size_l'
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
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
      type='button'
      {...otherProps}
    >
      {children}
    </button>
  );
};
