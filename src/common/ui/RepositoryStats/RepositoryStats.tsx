import { classNames } from '@common/utilities';

import cls from './RepositoryStats.module.scss';

interface RepositoryStatsProps {
  className?: string;
  icon: React.ReactNode;
  label: string;
  value?: string;
}

export const RepositoryStats = ({ className, icon, label, value }: RepositoryStatsProps) => {
  return (
    <article className={classNames(cls.statWrapper, {}, [className])}>
      <div className={cls.statIcon}>{icon}</div>
      <div className={cls.statText}>
        <div className={cls.statTextValue}>{value || 'Неизвестное значение'}</div>
        <div className={cls.statTextLabel}>{label}</div>
      </div>
    </article>
  );
};
