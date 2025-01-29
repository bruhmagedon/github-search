import { classNames } from '@common/utilities';

import cls from './Loader.module.scss';

export enum LoaderSize {
  S = 's',
  M = 'm',
  L = 'l'
}

interface LoaderProps {
  size?: LoaderSize
  type?: 'dots' | 'spinner'
}

export const Loader = ({ size = LoaderSize.L, type = 'spinner' }: LoaderProps) => {
  return (
    <>
      {type === 'spinner' && <div className={classNames(cls.loader, {}, [cls[size]])}></div>}
      {type === 'dots' && <div className={classNames(cls.dots, {}, [cls[size]])}></div>}
    </>
  );
};
