import IconArrowDown from '@assets/ArrowDown.svg?react';
import { classNames } from '@common/utilities';
import { useEffect, useRef, useState } from 'react';

import cls from './Select.module.scss';

interface SelectProps {
  className?: string;
  data: string[];
  onChange?: (selected: string) => void;
}

export const Select = ({ className, data, onChange }: SelectProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState(data[0] || '');
  const [isFocused, setIsFocused] = useState(false);
  const selectRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (selectRef.current && !selectRef.current.contains(event.target as Node)) {
        setIsOpen(false);
        setIsFocused(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleSelect = (item: string) => {
    setSelected(item);
    setIsOpen(false);
    if (onChange) {
      onChange(item);
    }
  };

  return (
    <div
      ref={selectRef}
      className={classNames(cls.select, { [cls.focused]: isFocused }, [className])}
      tabIndex={0}
      onBlur={() => setIsFocused(false)}
      onFocus={() => setIsFocused(true)}
    >
      <div
        className={cls.selected}
        onClick={() => setIsOpen(!isOpen)}
      >
        {selected}
        <IconArrowDown className={cls.arrow} />
      </div>
      {isOpen && (
        <div className={cls.selectDropdown} role='select'>
          {data.map((item) => (
            <div
              key={`Option_${item}`}
              className={cls.selectDropdownItem}
              data-selected={selected === item}
              onClick={() => handleSelect(item)}
              role='option'
            >
              {item}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
