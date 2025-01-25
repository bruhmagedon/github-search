import { Avatar } from '@common/ui';
import { classNames } from '@common/utilities';

import cls from './RepositoryDetailsPage.module.scss';

const RepositoryDetailsPage = () => {
  return (
    <article className={classNames(cls.RepositoryPage, {}, [])}>
      <div className={classNames(cls.card, {}, [])}>
        <h1 className={classNames(cls.cardTitle, {}, [])}>
          Профиль
        </h1>
        <header className={cls.cardHeader}>
          <Avatar alt='Repostitory Avatar' src='https://avatars.githubusercontent.com/u/1342004?v=4' />
          <div className={cls.cardTextContainer}>
            <h2 className={cls.cardRepoName}>tanya-ling/middle-russian-parser</h2>
            <p className={cls.cardRepoDescription}>Программа для автоматической лемматизации и
              морфологического анализа русских текстов 15—17 вв
            </p>
          </div>
        </header>
        <div className={cls.cardStats}>
          Карточка
        </div>
      </div>
    </article>
  );
};

export default RepositoryDetailsPage;
