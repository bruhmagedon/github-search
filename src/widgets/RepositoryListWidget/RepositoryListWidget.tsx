import type { IRepository } from '@common/types/Repository';

import { Card as RepositoryCard, Skeleton } from '@common/ui';

import cls from './RepositoryListWidget.module.scss';

interface RepositoryListWidgetProps {
  emptyMessage?: string;
  isLoading?: boolean;
  items: IRepository[];
  showLoader?: boolean;
  skeletonCount?: number;
}

export const RepositoryListWidget = ({
  items,
  isLoading = false,
  skeletonCount = 12,
  emptyMessage = 'Репозитории не найдены',
  showLoader = true
}: RepositoryListWidgetProps) => {
  if (!items.length && !isLoading) {
    return <div className={cls.repositoryListClear}>{emptyMessage}</div>;
  }

  if (isLoading && showLoader) {
    return (
      <div className={cls.repositoryList}>
        {Array.from({ length: skeletonCount }).map((_, index) => (
          <Skeleton key={`Skeleton_${index}`} />
        ))}
      </div>
    );
  }

  return (
    <div className={cls.repositoryList}>
      {items.map((repo) => (
        <RepositoryCard key={`RepoCard_${repo.id}`} item={repo} />
      ))}
    </div>
  );
};
