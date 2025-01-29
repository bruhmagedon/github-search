import type { IRepository } from '@common/types/Repository';

import IconLike from '@assets/icon/Heart.svg?react';
import { rootStore } from '@common/stores/RootStore';
import { classNames } from '@common/utilities';
import { observer } from 'mobx-react-lite';

import { Button, ButtonSize } from '../Button/Button';

import cls from './ToggleFavoriteButton.module.scss';

interface ToggleFavoriteButtonProps {
  repository: IRepository;
  size?: ButtonSize;
}

// Кнопка для переключения состояния: избранный у репозитория
export const ToggleFavoriteButton = observer(({
  repository,
  size = ButtonSize.M
}: ToggleFavoriteButtonProps) => {
  const { changeFavorite, getReposIsFavorite } = rootStore.favoritesStore;

  return (
    <Button square size={size} onClick={() => changeFavorite(repository)}>
      <IconLike
        className={classNames(
          cls.likeIcon,
          { [cls.liked]: getReposIsFavorite(repository.id) }
        )}
      />
    </Button>
  );
});
