import SearchLogo from '@assets/SearchLogo.svg?react';

import cls from './Header.module.scss';

// TODO: Реализовать ссылки
export const Header = () => {
  return (
    <header className={cls.header}>
      <div className={cls.headerContainer}>
        <div className={cls.appLogo}>
          <SearchLogo className={cls.appLogoIcon} />
          <span className={cls.appLogoText}>GitHubSearch</span>
        </div>
        <nav className={cls.headerLinksContainer}>
          <div />
          <div />
        </nav>
      </div>
    </header>
  );
};
