import type { InputHTMLAttributes } from 'react';

import { classNames } from '@common/utilities';

import cls from './Input.module.scss';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  className?: string;
  value: string;
}

export const Input = (props: InputProps) => {
  const { className, type = 'text', value, onChange, disabled, placeholder } = props;

  return (
    <div className={classNames(cls.inputWrapper, {}, [className])}>
      <input
        className={cls.input}
        disabled={disabled}
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
      />
    </div>
  );
};
