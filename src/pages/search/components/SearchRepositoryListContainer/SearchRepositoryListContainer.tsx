import { rootStore } from '@common/stores/RootStore';
import { RepositoryListWidget } from '@widgets/RepositoryListWidget/RepositoryListWidget';
import { observer } from 'mobx-react-lite';

export const SearchRepositoryListContainer = observer(() => {
  const {
    repositoriesState: { data, isLoading }
  } = rootStore.repositoryStore;

  return (
    <RepositoryListWidget
      emptyMessage='Репозитории не найдены'
      items={data || []}
      isLoading={isLoading}
      showLoader
      skeletonCount={12}
    />
  );
});
