// TODO: Добавить public api для assets
import IconArchive from '@assets/Archive.svg?react';
import IconArrowLeft from '@assets/ArrowLeft.svg?react';
import IconCreate from '@assets/Create.svg?react';
import IconFolder from '@assets/Folder.svg?react';
import IconFork from '@assets/Fork.svg?react';
import IconLike from '@assets/Heart.svg?react';
import IconLink from '@assets/Link.svg?react';
import IconStar from '@assets/Star.svg?react';
import IconTerminal from '@assets/Terminal.svg?react';
import { Avatar, Button, ButtonSize, ButtonTheme, CardStats } from '@common/ui';
import { classNames } from '@common/utilities';
import { useNavigate } from 'react-router-dom';

import cls from './RepositoryDetailsPage.module.scss';

// TODO: Посмотреть нейминг cls в фигме
const RepositoryDetailsPage = () => {
  const navigate = useNavigate();

  return (
    <div className={classNames(cls.RepositoryPage, {}, [])}>
      <div className={cls.backButton}>
        <Button onClick={() => navigate(-1)}>
          <div className={cls.backButtonContent}>
            <IconArrowLeft />
            <span>Back</span>
          </div>
        </Button>
      </div>
      <article className={classNames(cls.card, {}, [])}>
        <h1 className={classNames(cls.cardTitle, {}, [])}>Профиль</h1>
        <header className={cls.cardHeader}>
          <Avatar
            alt='Repostitory Avatar'
            src='https://avatars.githubusercontent.com/u/1342004?v=4'
          />
          <div className={cls.cardTextContainer}>
            <h2 className={cls.cardRepoName}>
              tanya-ling/middle-russian-parser
            </h2>
            <p className={cls.cardRepoDescription}>
              Программа для автоматической лемматизации и морфологического
              анализа русских текстов 15—17 вв
            </p>
          </div>
        </header>
        <div className={cls.cardStats}>
          <CardStats
            label='Количество звезд'
            value='1 329'
            icon={<IconStar />}
          />
          <CardStats
            label='Количество форков'
            value='234'
            icon={<IconFork />}
          />
          <CardStats label='В архиве' value='Нет' icon={<IconArchive />} />
          <CardStats label='Язык' value='Python' icon={<IconTerminal />} />
          <CardStats label='Cоздано' value='16.12.2017' icon={<IconFolder />} />
          <CardStats
            label='Изменено'
            value='19.12.2023'
            icon={<IconCreate />}
          />
        </div>
        <div className={cls.cardDivider} />
        <footer className={cls.cardFooter}>
          <div className={cls.cardFooterButtons} role='group'>
            <Button square size={ButtonSize.L}><IconLike className={cls.cardButtonsIcon} /></Button>
            <Button square size={ButtonSize.L}><IconLink className={cls.cardButtonsIcon} /></Button>
          </div>
          <Button size={ButtonSize.L} theme={ButtonTheme.RED}>Открыть репозиторий</Button>
        </footer>
      </article>
    </div>
  );
};

export default RepositoryDetailsPage;
