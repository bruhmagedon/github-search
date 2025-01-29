import type { IRepository } from '@common/types/Repository';

import IconFork from '@assets/icon/Fork.svg?react';
import IconLink from '@assets/icon/Link.svg?react';
import IconStar from '@assets/icon/Star.svg?react';
import { useClipboard } from '@common/hooks';
import { classNames } from '@common/utilities';
import { observer } from 'mobx-react-lite';

import { AppLink, AppLinkTheme } from '../AppLink/AppLink';
import { Avatar } from '../Avatar/Avatar';
import { Badge } from '../Badge/Badge';
import { Button } from '../Button/Button';
import { ToggleFavoriteButton } from '../ToggleFavoriteButton/ToggleFavoriteButton';

import cls from './Card.module.scss';

interface CardProps {
  className?: string;
  item: IRepository;
}

export const Card = observer(({ className, item }: CardProps) => {
  const { onCopyLink } = useClipboard();

  return (
    <article className={classNames(cls.card, {}, [className])}>
      <div className={cls.cardContent}>
        <header className={cls.cardContentHeader}>
          <Avatar alt='Repository Avatar' size={32} src={item.owner.avatar_url} />
          <div className={cls.cardBadges}>
            <Badge
              title={item.stargazers_count.toString()}
              icon={<IconStar />}
            />
            <Badge
              title={item.forks_count.toString()}
              icon={<IconFork />}
            />
          </div>
        </header>
        <div className={cls.cardInfo}>
          <span className={cls.cardName}>{`@${item.owner.login}`}</span>
          <span className={cls.cardFullName}>{item.full_name}</span>
        </div>
      </div>
      <footer className={cls.cardFooter}>
        <div className={cls.cardFooterButtons}>
          <ToggleFavoriteButton repository={item} />
          <Button square onClick={() => onCopyLink(item.html_url)}>
            <IconLink />
          </Button>
        </div>
        <AppLink theme={AppLinkTheme.BUTTON_RED} to={`/repository/${item.owner.login}/${item.name}`}>
          Подробнее
        </AppLink>
      </footer>
    </article>
  );
});
