import { rootStore } from '@common/stores/RootStore';
import { Card as RepositoryCard, Skeleton } from '@common/ui';
import { observer } from 'mobx-react-lite';

import cls from './RepositoryList.module.scss';

export const RepositoryList = observer(() => {
  const { repositoriesState: { data, isLoading } } = rootStore.repositoryStore;

  if (!data?.length && !isLoading) {
    return <div className={cls.repositoryListClear}>Репозитории не найдены</div>;
  }

  return (
    <div className={cls.repositoryList}>
      {isLoading ? (Array.from({ length: 12 }).map((_, index) => <Skeleton key={`Skeleton_${index}`} />)) :
        data?.map((repo) => (
          <RepositoryCard key={`RepoCard_${repo.id}`} item={repo} />
        ))}
    </div>
  );
});
