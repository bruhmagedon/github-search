import { rootStore } from '@common/stores/RootStore';
import { classNames } from '@common/utilities';
import { observer } from 'mobx-react-lite';

import cls from './FavoritesCounter.module.scss';

export const FavoritesCounter = observer(() => {
  const { favorites } = rootStore.favoritesStore;

  return (
    <div className={classNames(cls.favoritesCount, { [cls.hidden]: !favorites.length })}>
      {favorites.length}
    </div>
  );
});
