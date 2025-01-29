import { searchSortVariants } from '@common/config/sortTypesConfig';
import { rootStore } from '@common/stores/RootStore';
import { SortingWidget } from '@widgets/SortingWidget/SortingWidget';
import { observer } from 'mobx-react-lite';

export const SearchSortingContainer = observer(() => {
  const {
    repositoriesState: { data, isLoading },
    setSortType
  } = rootStore.repositoryStore;

  const handleSortChange = (selected: string) => {
    setSortType(searchSortVariants[selected]);
  };

  return (
    <SortingWidget
      title='Результат'
      count={data?.length}
      isLoading={isLoading}
      onSortChange={handleSortChange}
      showLoader
      sortOptions={Object.keys(searchSortVariants)}
    />
  );
});
