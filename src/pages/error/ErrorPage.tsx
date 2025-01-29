import { AppLink, AppLinkTheme } from '@common/ui';
import { classNames } from '@common/utilities';
import { useRouteError } from 'react-router-dom';

import cls from './ErrorPage.module.scss';

export const ErrorPage = () => {
  const error = useRouteError();
  console.error('Routing error:', error);

  return (
    <div className={classNames(cls.errorPage)}>
      <h1 className={cls.title}>Что-то пошло не так 😢</h1>
      <p className={cls.message}>Произошла ошибка при загрузке страницы.</p>
      <p className={cls.details}>{(error as Error)?.message || 'Неизвестная ошибка'}</p>
      <AppLink className={cls.link} theme={AppLinkTheme.BUTTON_RED} to='/'>
        Вернуться на главную
      </AppLink>
    </div>
  );
};

export default ErrorPage;
