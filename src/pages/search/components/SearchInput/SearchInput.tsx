import { rootStore } from '@common/stores/RootStore';
import { Input } from '@common/ui';
import { observer } from 'mobx-react-lite';

import cls from './SearchInput.module.scss';

export const SearchInput = observer(() => {
  const { repositoryStore } = rootStore;
  return (
    <div className={cls.searchInput}>
      <Input
        value={repositoryStore.query}
        onChange={(event) => repositoryStore.setQuery(event.currentTarget.value)}
        placeholder='Поиск репозиториев'
      />
    </div>
  );
});
