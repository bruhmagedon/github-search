import { classNames } from '@shared/utilities';

import cls from './FavoritesPage.module.scss';

const FavoritesPage = () => {
  return (
    <div className={classNames(cls.FavoritesPage, {}, [])}>
      Страница избранного
    </div>
  );
};

export default FavoritesPage;
