import IconArchive from '@assets/Archive.svg?react';
import IconCreate from '@assets/Create.svg?react';
import IconFolder from '@assets/Folder.svg?react';
import IconFork from '@assets/Fork.svg?react';
import IconStar from '@assets/Star.svg?react';
import IconTerminal from '@assets/Terminal.svg?react';
import { Avatar, CardStats } from '@common/ui';
import { classNames } from '@common/utilities';

import cls from './RepositoryDetailsPage.module.scss';

const RepositoryDetailsPage = () => {
  return (
    <div className={classNames(cls.RepositoryPage, {}, [])}>
      <article className={classNames(cls.card, {}, [])}>
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
          <CardStats label='Количество звезд' value='1 329' icon={<IconStar />} />
          <CardStats label='Количество форков' value='234' icon={<IconFork />} />
          <CardStats label='В архиве' value='Нет' icon={<IconArchive />} />
          <CardStats label='Язык' value='Python' icon={<IconTerminal />} />
          <CardStats label='Cоздано' value='16.12.2017' icon={<IconFolder />} />
          <CardStats label='Изменено' value='19.12.2023' icon={<IconCreate />} />
        </div>
      </article>
    </div>
  );
};

export default RepositoryDetailsPage;
