import { classNames } from '@common/utilities';

import cls from './Badge.module.scss';

interface BadgeProps {
  className?: string;
  icon?: React.ReactNode
  title: string;
}

export const Badge = ({ className, icon, title }: BadgeProps) => {
  return (
    <div className={classNames(cls.badge, {}, [className])}>
      {icon}
      <span className={cls.badgeTitle}>{title}</span>
    </div>
  );
};
