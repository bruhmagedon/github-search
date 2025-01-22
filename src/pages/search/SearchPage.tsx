import { classNames } from '@shared/utilities';

import cls from './SearchPage.module.scss';

interface SearchPageProps {
  className?: string;
}

export const SearchPage = ({ className }: SearchPageProps) => {
  return <div className={classNames(cls.SearchPage, {}, [className])}></div>;
};
