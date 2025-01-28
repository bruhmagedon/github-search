import { Input, Select } from '@common/ui';
import { observer } from 'mobx-react-lite';
import { useState } from 'react';

import cls from './SearchSorting.module.scss';

export const SearchSorting = observer(() => {
  const sortVariants = ['New First', 'Most Stars', 'Most Forks', 'Alphabetical (A-Z)', 'Alphabetical (Z-A)'];

  const handleSortChange = (selected: string) => {
    console.log('Selected:', selected);
  };

  return (
    <div className={cls.sortingContainer}>
      <div className={cls.sortingResult}>Result: 100 repositories</div>
      <Select data={sortVariants} onChange={handleSortChange} />
    </div>
  );
});
