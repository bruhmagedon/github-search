import { searchSortVariants } from '@common/config/sortTypesConfig';
import { rootStore } from '@common/stores/RootStore';
import { LoaderWrapper, Select, Skeleton } from '@common/ui';

import cls from './SearchSorting.module.scss';

// TODO ПОКА ЧТО ОТКЛЮЧИЛ OBSERVER ЧТОБЫ ОН НЕ СБРАСЫВАЛ SELECT РЕ-РЕНДЕРОМ
export const SearchSorting = () => {
  const { repositoriesState: { data, isLoading }, setSortType } = rootStore.repositoryStore;

  const handleSortChange = (selected: string) => {
    console.log('Selected:', searchSortVariants[selected]);
    setSortType(searchSortVariants[selected]);
  };

  return (
    <div className={cls.sortingContainer}>
      <div className={cls.sortingText}>
        <LoaderWrapper
          isLoading={isLoading}
          loader={<Skeleton className={cls.sortingTextSkeleton} />}
        >
          <span>Результат: {data?.length || 'Нет результатов'}</span>
        </LoaderWrapper>
      </div>
      <div className={cls.sortingSelect}>
        <LoaderWrapper
          isLoading={isLoading}
          loader={<Skeleton className={cls.sortingSelectSkeleton} />}
        >
          <Select data={Object.keys(searchSortVariants)} onChange={handleSortChange} />
        </LoaderWrapper>
      </div>
    </div>
  );
};
