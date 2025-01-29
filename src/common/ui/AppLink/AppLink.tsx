import type { LinkProps } from 'react-router-dom';

import { classNames } from '@common/utilities';
import { Link } from 'react-router-dom';

import cls from './AppLink.module.scss';

export enum AppLinkTheme {
  PRIMARY = 'primary',
  BUTTON_RED = 'button_red'
}

export enum AppLinkSize {
  M = 'size_m',
  L = 'size_l'
}

interface AppLinkProps extends LinkProps {
  children: React.ReactNode;
  className?: string;
  size?: AppLinkSize;
  theme?: AppLinkTheme;
}

export const AppLink = (props: AppLinkProps) => {
  const {
    to,
    className,
    children,
    theme = AppLinkTheme.PRIMARY,
    size = AppLinkSize.M,
    ...otherProps
  } = props;

  return (
    <Link
      className={classNames(cls.AppLink, { [cls[theme]]: true, [cls[size]]: true }, [className])}
      to={to}
      {...otherProps}
    >
      {children}
    </Link>
  );
};
