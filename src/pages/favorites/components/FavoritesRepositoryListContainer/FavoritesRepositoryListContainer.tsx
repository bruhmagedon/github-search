import { rootStore } from '@common/stores/RootStore';
import { RepositoryListWidget } from '@widgets/RepositoryListWidget/RepositoryListWidget';
import { observer } from 'mobx-react-lite';

export const FavoritesRepositoryListContainer = observer(() => {
  const {
    sortedFavorites
  } = rootStore.favoritesStore;

  return (
    <RepositoryListWidget
      emptyMessage='Нет избранных репозиториев'
      items={sortedFavorites || []}
      isLoading={false}
      showLoader={false}
      skeletonCount={0}
    />
  );
});
