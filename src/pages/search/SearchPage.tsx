import { Card, Input, Select } from '@common/ui';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import cls from './SearchPage.module.scss';

// TODO: Подумать над неймингом переменных (best practice for css modules)
const SearchPage = () => {
  const navigate = useNavigate();
  const [term, setTerm] = useState('');
  const sortVariants = ['New First', 'Most Stars', 'Most Forks', 'Alphabetical (A-Z)', 'Alphabetical (Z-A)'];

  const handleSortChange = (selected: string) => {
    console.log('Selected:', selected);
  };

  const onRedirect = () => {
    navigate('/repository/12/12');
  };

  return (
    <main className={cls.searchPage}>
      <div className={cls.searchInputContainer}>
        <Input value={term} onChange={(event) => setTerm(event.currentTarget.value)} placeholder='Search' />
      </div>
      <div className={cls.searchSortingContainer}>
        <div className={cls.searchSortingResult}>Result: 100 repositories</div>
        <Select data={sortVariants} onChange={handleSortChange} />
      </div>
      <div className={cls.searchCardContainer}>
        <Card onClick={onRedirect} />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </main>
  );
};

export default SearchPage;
