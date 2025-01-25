import { classNames } from '@common/utilities';

import cls from './CardStats.module.scss';

interface CardProps {
  className?: string;
  icon: React.ReactNode;
  label: string;
  value: string;
}

// TODO: Я бы подумал как по другом назвать этот проект, чтобы не было пересечений с Card
export const CardStats = ({ className, icon, label, value }: CardProps) => {
  return (
    <article className={classNames(cls.statWrapper, {}, [className])}>
      <div className={cls.statIcon}>{icon}</div>
      <div className={cls.statText}>
        <div className={cls.statTextValue}>{value}</div>
        <div className={cls.statTextLabel}>{label}</div>
      </div>
    </article>
  );
};
