import { classNames } from '@shared/utilities';

import cls from './ErrorPage.module.scss';

export const ErrorPage = () => {
  return (
    <div className={classNames(cls.ErrorPage, {}, [])}>
      Произошла ошибка
    </div>
  );
};

export default ErrorPage;
