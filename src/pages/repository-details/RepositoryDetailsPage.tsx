import { classNames } from '@shared/utilities';

import cls from './SearchPage.module.scss';

const RepositoryDetailsPage = () => {
  return (
    <div className={classNames(cls.RepositoryDetailsPage, {}, [])}>
      Страница репозитория
    </div>
  );
};

export default RepositoryDetailsPage;
