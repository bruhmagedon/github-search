import type { Mods } from '@common/utilities';
import type { CSSProperties } from 'react';

import { classNames } from '@common/utilities';
import { useMemo } from 'react';

import cls from './Avatar.module.scss';

interface AvatarProps {
  alt?: string;
  className?: string;
  size?: number;
  src?: string;
}

export const Avatar = ({
  className,
  src,
  size,
  alt
}: AvatarProps) => {
  const mods: Mods = {};

  const styles = useMemo<CSSProperties>(() => ({
    width: size || 125,
    height: size || 125
  }), [size]);

  return (
    <img
      alt={alt}
      className={classNames(cls.Avatar, mods, [className])}
      src={src}
      style={styles}
    />
  );
};
