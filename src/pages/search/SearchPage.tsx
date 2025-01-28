import { RepositoryList } from './components/RepositoryList/RepositoryList';
import { SearchInput } from './components/SearchInput/SearchInput';
import { SearchSorting } from './components/SearchSorting/SearchSorting';

import cls from './SearchPage.module.scss';

const SearchPage = () => {
  return (
    <div className={cls.searchPage}>
      <SearchInput />
      <SearchSorting />
      <RepositoryList />
    </div>
  );
};

export default SearchPage;
