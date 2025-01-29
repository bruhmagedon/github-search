import { PreviousPageButton } from '@common/ui';
import { classNames } from '@common/utilities';

import { FavoritesRepositoryListContainer } from './components/FavoritesRepositoryListContainer/FavoritesRepositoryListContainer';
import { FavoritesSortingContainer } from './components/FavoritesSearchContainer/FavoritesSearchContainer';

import cls from './FavoritesPage.module.scss';

const FavoritesPage = () => {
  return (
    <div className={classNames(cls.favoritesPage, {}, [])}>
      <PreviousPageButton />
      <FavoritesSortingContainer />
      <FavoritesRepositoryListContainer />
    </div>
  );
};

export default FavoritesPage;
