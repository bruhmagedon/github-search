import type { IRepository } from '@common/types/Repository';

import IconArchive from '@assets/icon/Archive.svg?react';
import IconCreate from '@assets/icon/Create.svg?react';
import IconFolder from '@assets/icon/Folder.svg?react';
import IconFork from '@assets/icon/Fork.svg?react';
import IconStar from '@assets/icon/Star.svg?react';
import IconTerminal from '@assets/icon/Terminal.svg?react';
import { formatDate, formatLanguage } from '@common/utilities';

export const createRepositoryStatsConfig = (repository: IRepository) => {
  return [
    {
      label: 'Количество звезд',
      value: repository?.stargazers_count?.toString(),
      icon: <IconStar />
    },
    {
      label: 'Количество форков',
      value: repository?.forks_count?.toString(),
      icon: <IconFork />
    },
    {
      label: 'В архиве',
      value: repository?.archived ? 'Да' : 'Нет',
      icon: <IconArchive />
    },
    {
      label: 'Язык',
      value: formatLanguage(repository?.language),
      icon: <IconTerminal />
    },
    {
      label: 'Создано',
      value: formatDate(repository?.created_at),
      icon: <IconFolder />
    },
    {
      label: 'Изменено',
      value: formatDate(repository?.updated_at),
      icon: <IconCreate />
    }
  ];
};
