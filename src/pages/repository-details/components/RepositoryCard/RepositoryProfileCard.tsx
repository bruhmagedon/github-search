import type { IRepository } from '@common/types/Repository';

import IconLink from '@assets/icon/Link.svg?react';
import { useClipboard } from '@common/hooks';
import {
  AppLink,
  AppLinkSize,
  AppLinkTheme,
  Avatar,
  Button,
  ButtonSize,
  RepositoryStats,
  ToggleFavoriteButton
} from '@common/ui';
import { classNames } from '@common/utilities';
import { useMemo } from 'react';

import { createRepositoryStatsConfig } from './createRepositoryStatsConfig';

import cls from './RepositoryProfileCard.module.scss';

interface RepositoryProfileCardProps {
  className?: string;
  repository: IRepository;
}

export const RepositoryProfileCard = ({ className, repository }: RepositoryProfileCardProps) => {
  const { onCopyLink } = useClipboard();
  const statsConfig = useMemo(() => createRepositoryStatsConfig(repository), [repository]);

  return (
    <article className={classNames(cls.cardWrapper, {}, [className])}>
      <h1 className={cls.cardTitle}>Профиль</h1>
      <header className={cls.cardHeader}>
        <Avatar alt='Repostitory Avatar' src={repository?.owner.avatar_url} />
        <div className={cls.cardTextContainer}>
          <h2 className={cls.cardRepoName}>{repository?.full_name}</h2>
          <p className={cls.cardRepoDescription}>{repository?.description}</p>
        </div>
      </header>
      <div className={cls.cardStats}>
        {statsConfig.map(({ label, value, icon }) => (
          <RepositoryStats key={`RepositoryStat_${label}`} label={label} value={value} icon={icon} />
        ))}
      </div>
      <div className={cls.cardDivider} />
      <footer className={cls.cardFooter}>
        <div className={cls.cardFooterButtons} role='group'>
          <ToggleFavoriteButton size={ButtonSize.L} repository={repository} />
          <Button square size={ButtonSize.L} onClick={() => onCopyLink(repository.html_url)}>
            <IconLink className={cls.cardButtonsIcon} />
          </Button>
        </div>
        <AppLink size={AppLinkSize.L} target='_blank' theme={AppLinkTheme.BUTTON_RED} to={repository.html_url}>
          Открыть репозиторий
        </AppLink>

      </footer>
    </article>
  );
};
