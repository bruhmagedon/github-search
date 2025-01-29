import { useRepository } from '@common/hooks';
import { Loader, NotFoundTypography, PreviousPageButton } from '@common/ui';
import { classNames } from '@common/utilities';
import { observer } from 'mobx-react-lite';

import { RepositoryProfileCard } from './components/RepositoryCard/RepositoryProfileCard';

import cls from './RepositoryDetailsPage.module.scss';

const RepositoryDetailsPage = observer(() => {
  const { data, isLoading } = useRepository();

  return (
    <div className={classNames(cls.RepositoryPage, {}, [])}>
      <PreviousPageButton />
      {isLoading ? (
        <Loader />
      ) : (
        <>
          {data && <RepositoryProfileCard repository={data} />}
          {!data && <NotFoundTypography text='Репозиторий не найден' />}
        </>
      )}
    </div>
  );
});

export default RepositoryDetailsPage;
