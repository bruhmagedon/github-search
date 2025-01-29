import { SearchInput } from './components/SearchInput/SearchInput';
import { SearchRepositoryListContainer } from './components/SearchRepositoryListContainer/SearchRepositoryListContainer';
import { SearchSortingContainer } from './components/SearchSortingContainer/SearchSortingContainer';

import cls from './SearchPage.module.scss';

const SearchPage = () => {
  return (
    <div className={cls.searchPage}>
      <SearchInput />
      <SearchSortingContainer />
      <SearchRepositoryListContainer />
    </div>
  );
};

export default SearchPage;
