import { classNames } from '@shared/utilities';

import cls from './RepositoryDetailsPage.module.scss';

const RepositoryDetailsPage = () => {
  return (
    <div className={classNames(cls.RepositoryDetailsPage, {}, [])}>
      Страница репозитория
    </div>
  );
};

export default RepositoryDetailsPage;
