import { AppLink, AppLinkTheme } from '@common/ui';

import cls from './NotFoundPage.module.scss';

export const NotFoundPage = () => {
  return (
    <div className={cls.notFoundPage}>
      <h1 className={cls.title}>404</h1>
      <p className={cls.message}>Страница не найдена</p>
      <AppLink className={cls.link} theme={AppLinkTheme.BUTTON_RED} to='/'>
        Вернуться на главную
      </AppLink>
    </div>
  );
};

export default NotFoundPage;
