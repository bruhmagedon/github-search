import { classNames } from '@common/utilities';

import cls from './Loader.module.scss';

export enum LoaderSize {
  M = 'm',
  L = 'l'
}

interface LoaderProps {
  size?: LoaderSize
}

export const Loader = ({ size = LoaderSize.L }: LoaderProps) => {
  return <div className={classNames(cls.loader, {}, [cls[size]])}></div>;
};
