import { classNames } from '@common/utilities';

import cls from './NotFoundPage.module.scss';

export const NotFoundPage = () => {
  return (
    <div className={classNames(cls.NotFoundPage, {}, [])}>
      Страница не найдена
    </div>
  );
};

export default NotFoundPage;
