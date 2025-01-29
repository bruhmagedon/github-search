import IconAccount from '@assets/icon/Account.svg?react';
import IconLike from '@assets/icon/Heart.svg?react';
import SearchLogo from '@assets/icon/SearchLogo.svg?react';
import { Button, ButtonSize, ButtonTheme, Loader } from '@common/ui';
import { useNavigate } from 'react-router-dom';

import { FavoritesCounter } from './components/FavoritesCounter';

import cls from './Header.module.scss';

export const Header = () => {
  const navigate = useNavigate();

  return (
    <header className={cls.header}>
      <div className={cls.headerContainer}>
        <div className={cls.appLogo} onClick={() => navigate('/')}>
          <SearchLogo className={cls.appLogoIcon} />
          <span className={cls.appLogoText}>GitHubSearch</span>
        </div>
        <nav className={cls.headerLinksContainer}>
          <Button
            square
            className={cls.profileButton}
            size={ButtonSize.L}
            theme={ButtonTheme.GHOST}
            onClick={() => navigate('/favorites')}
          >
            <FavoritesCounter />
            <IconLike />
          </Button>
          <Button
            square
            className={cls.profileButton}
            size={ButtonSize.L}
            theme={ButtonTheme.HEADER}
          >
            <IconAccount />
          </Button>
        </nav>
      </div>
    </header>
  );
};
