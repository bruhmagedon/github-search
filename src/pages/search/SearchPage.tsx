import { classNames } from '@shared/utilities';

import cls from './SearchPage.module.scss';

const SearchPage = () => {
  return (
    <div className={classNames(cls.SearchPage, {}, [])}>
      Страница поиска репозиториев
    </div>
  );
};

export default SearchPage;
