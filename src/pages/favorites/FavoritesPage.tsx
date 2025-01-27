import { classNames } from '@common/utilities';

import cls from './FavoritesPage.module.scss';

const FavoritesPage = () => {
  return (
    <div className={classNames(cls.favoritesPage, {}, [])}>
      <div className={classNames(cls.favoritesWrapper, {}, [])}>
        <div className={classNames(cls.favoritesTitle, {}, [])}>
          Профиль
        </div>
      </div>
    </div>
  );
};

export default FavoritesPage;
