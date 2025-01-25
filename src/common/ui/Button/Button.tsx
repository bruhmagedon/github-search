import type { Mods } from '@common/utilities';
import type { ButtonHTMLAttributes } from 'react';

import { classNames } from '@common/utilities';

import cls from './Button.module.scss';

export enum ButtonTheme {
  CLEAR = 'clear',
  RED = 'red'
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  disabled?: boolean;
  square?: boolean;
  theme?: ButtonTheme;
}

export const Button = (props: ButtonProps) => {
  const {
    className,
    children,
    theme = ButtonTheme.CLEAR,
    square,
    disabled,
    ...otherProps
  } = props;

  const mods: Mods = {
    [cls[theme]]: true,
    [cls.square]: square,
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
