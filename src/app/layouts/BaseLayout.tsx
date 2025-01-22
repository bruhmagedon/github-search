import { classNames } from '@shared/utilities';

import cls from './BaseLayout.module.scss';

interface BaseLayoutProps {
  className?: string;
}

export function BaseLayout({ className }: BaseLayoutProps) {
  return <div className={classNames(cls.BaseLayout, {}, [className])}></div>;
}
