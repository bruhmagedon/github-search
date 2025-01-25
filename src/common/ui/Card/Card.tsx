import IconFork from '@assets/Fork.svg?react';
import IconLike from '@assets/Heart.svg?react';
import IconLink from '@assets/Link.svg?react';
import IconStar from '@assets/Star.svg?react';
import { classNames } from '@common/utilities';

import { Avatar } from '../Avatar/Avatar';
import { Badge } from '../Badge/Badge';
import { Button, ButtonTheme } from '../Button/Button';

import cls from './Card.module.scss';

interface CardProps {
  className?: string;
  onClick?: () => void;
}

export const Card = ({ className, onClick }: CardProps) => {
  return (
    <article className={classNames(cls.card, {}, [className])}>
      <div className={cls.cardContent}>
        <header className={cls.cardContentHeader}>
          <Avatar alt='Repostitory Avatar' size={32} src='https://avatars.githubusercontent.com/u/1342004?v=4' />
          <div className={cls.cardBadges} role='group'>
            <Badge title='234' icon={<IconStar />} />
            <Badge title='1 329' icon={<IconFork />} />
          </div>
        </header>
        <div className={cls.cardInfo}>
          <span className={cls.cardName}>@leveldb</span>
          <span className={cls.cardFullName}>google/leveldb</span>
        </div>
      </div>
      <footer className={cls.cardFooter}>
        <div className={cls.cardFooterButtons} role='group'>
          <Button square><IconLike /></Button>
          <Button square><IconLink /></Button>
        </div>
        <Button theme={ButtonTheme.RED} onClick={onClick}>Подробнее</Button>
      </footer>
    </article>
  );
};
