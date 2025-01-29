import { favoritesSortVariants } from '@common/config/sortTypesConfig';
import { rootStore } from '@common/stores/RootStore';
import { SortingWidget } from '@widgets/SortingWidget/SortingWidget';
import { observer } from 'mobx-react-lite';

export const FavoritesSortingContainer = observer(() => {
  const {
    favorites,
    setSortType
  } = rootStore.favoritesStore;

  const handleSortChange = (selected: string) => {
    setSortType(favoritesSortVariants[selected]);
  };

  return (
    <SortingWidget
      title='Избранное'
      count={favorites?.length}
      isLoading={false}
      onSortChange={handleSortChange}
      showLoader={false}
      sortOptions={Object.keys(favoritesSortVariants)}
    />
  );
});
